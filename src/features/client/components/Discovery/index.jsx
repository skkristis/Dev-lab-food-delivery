import { Box, Heading, Flex, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { restaurantInspectMock } from '../../mocks/restaurantInspectMock';
import './index.scss';
import RestaurantInspectForLanding from '../RestaurantInspectForLanding';

function Discovery() {
  return (
    <Box as="section" className="container">
      <Heading>Discover</Heading>
      <Flex alignItems="center" mt={5}>
        <Button
          variant="ghost"
          onClick={() => {
            const container = document.querySelector('#discovery-item-list');
            container.scrollLeft -= 80;
          }}
        >
          <ChevronLeftIcon />
        </Button>
        <Box
          overflowX="scroll"
          id="discovery-item-list"
          padding="20px"
          width="100%"
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
          variant="ghost"
          onClick={() => {
            const container = document.querySelector('#discovery-item-list');
            container.scrollLeft += 80;
          }}
        >
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Box>
  );
}

export default Discovery;
