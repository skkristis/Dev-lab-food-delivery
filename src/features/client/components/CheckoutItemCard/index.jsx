import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import CheckoutItemQuantity from '../../components/CheckoutItemQuantity';

function CheckoutItemCard({ dish }) {
  const itemTotal = +dish.dishPrice * +dish.dishQuantity;

  return (
    <Flex marginBottom="10px" justifyContent="space-between">
      <Flex width="90%">
        <Box overflow="hidden" rounded="md" height="60px" marginRight="10px">
          <Image
            src={dish.dishThumb}
            marginRight="10px"
            rounded="md"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Heading fontSize="16px">{dish.dishName}</Heading>
          <Text fontSize="14px" marginTop="10px" color="blue.400">
            €{itemTotal}
          </Text>
        </Box>
      </Flex>
      <CheckoutItemQuantity dish={dish} />
    </Flex>
  );
}

export default CheckoutItemCard;
