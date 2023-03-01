import { Box, Heading, Flex, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { restaurantInspectMock } from '../../mocks/restaurantInspectMock';
import './index.scss';
import RestaurantInspectForLanding from '../RestaurantInspectForLanding';

function Discovery() {
  return (
    <Box as="section" className="container" position="relative">
      <Heading>Discover</Heading>
      <Flex alignItems="center" mt={5}>
        <Button
          position="absolute"
          zIndex={4}
          onClick={() => {
            const container = document.querySelector('#discovery-item-list');
            container.scrollLeft -= 160;
          }}
        >
          <ChevronLeftIcon />
        </Button>
        <Box
          padding="20px"
          width="100%"
          overflowX="scroll"
          id="discovery-item-list"
        >
          <Flex gap="20px">
            {restaurantInspectMock.restaurantMenu.map((dealSection) => {
              {
                return dealSection.deals.map((item, i) => (
                  <RestaurantInspectForLanding item={item} key={i} />
                ));
              }
            })}
          </Flex>
        </Box>
        <Button
          position="absolute"
          zIndex={4}
          right="0"
          onClick={() => {
            const container = document.querySelector('#discovery-item-list');
            container.scrollLeft += 160;
          }}
        >
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Box>
  );
}

export default Discovery;
