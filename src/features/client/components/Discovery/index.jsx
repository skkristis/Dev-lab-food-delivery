import { Box, Heading, Flex } from '@chakra-ui/react';
import RestaurantInspectForLanding from '../RestaurantInspectForLanding';
import ScrollButton from '../ScrollButton';
import './index.scss';
import { useQuery } from 'react-query';
import discoveryService from '../../../../services/discoveryService';
import { Spinner } from '@chakra-ui/react';

function Discovery() {
  const {data, isLoading } = useQuery(
    'restaurantItem',
    discoveryService.getRestaurantItem
  );


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
          justifyContent={isLoading && 'center'}
        >
          { isLoading ? (
            <Spinner />
          ) : (
            data.data.map((item) => (
              <RestaurantInspectForLanding item={item} key={item.id} />
          ))
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
