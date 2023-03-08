import { Box, Heading, Flex } from '@chakra-ui/react';
import RestaurantInspectForLanding from '../RestaurantInspectForLanding';
import ScrollButton from '../ScrollButton';
import './index.scss';
import { useQuery } from 'react-query';
import discoveryService from '../../../../services/discoveryService';
import { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';

function Discovery() {
  const [restaurantItem, setRestaurantItem] = useState({ data: [] });
  const { isLoading, data } = useQuery(
    'restaurantItem',
    discoveryService.getRestaurantItem
  );

  useEffect(() => {
    if (data) {
      setRestaurantItem(data);
    }
  }, [data]);

  console.log(restaurantItem);
  return (
    <Box as="section" className="container">
      <Heading>Discover</Heading>
      <Flex alignItems="center" mt={5} position="relative">
        <ScrollButton
          rightButton={false}
          left="10"
          position="absolute"
          id={'#discovery-item-list'}
        />
        <Flex
          gap="20px"
          padding="20px"
          width="100%"
          overflowX="scroll"
          id="discovery-item-list"
        >
          {restaurantItem.data.length > 0 && !isLoading ? (
            restaurantItem.data.map((item) => (
              <>
                <RestaurantInspectForLanding item={item} key={item.id} />
              </>
            ))
          ) : (
            <Spinner></Spinner>
          )}
        </Flex>
        <ScrollButton
          rightButton={true}
          right="10"
          position="absolute"
          id={'#discovery-item-list'}
        />
      </Flex>
    </Box>
  );
}

export default Discovery;
