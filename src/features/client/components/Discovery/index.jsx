import { Box, Heading } from '@chakra-ui/react';

import { restaurantInspectMock } from '../../mocks/restaurantInspectMock';
import RestaurantInspectCard from '../RestaurantInspectCard';

function Discovery() {
  return (
    <Box as="section" className="container">
      <Heading>Discovery</Heading>
      <Box bg="white" paddingTop="20px">
        {restaurantInspectMock.restaurantMenu.map((dealSection) => {
          {
            return dealSection.deals.map((item, i) => (
              <RestaurantInspectCard key={i} deal={item} />
            ));
          }
        })}
      </Box>
    </Box>
  );
}

export default Discovery;
