import { Box, Heading, Flex } from '@chakra-ui/react';
import RestaurantInspectCard from '../RestaurantInspectCard';

function RestaurantInspectSection({ dealSection, cartOpened }) {
  return (
    <Box className="container">
      <Heading fontSize="24px">{dealSection.heading}</Heading>
      <Flex
        marginTop="10px"
        flexWrap="wrap"
        gap="20px"
        paddingBlock="20px"
        justifyContent="space-between"
      >
        {dealSection.items.map((deal, i) => {
          return (
            <RestaurantInspectCard
              deal={deal}
              key={i}
              cartOpened={cartOpened}
            />
          );
        })}
      </Flex>
    </Box>
  );
}

export default RestaurantInspectSection;
