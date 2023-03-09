import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import CheckoutItemQuantity from '../../components/CheckoutItemQuantity';
import placeholderRestaurantUrl from '../../../../assets/placeholder-restaurant.jpg';

function CheckoutItemCard({ dish }) {
  const itemTotal = +dish.price * +dish.quantity;

  return (
    <Flex
      marginBottom="10px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex width="90%">
        <Box overflow="hidden" rounded="md" height="60px" marginRight="10px">
          <Image
            src={dish.thumbnail || placeholderRestaurantUrl}
            marginRight="10px"
            rounded="md"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Heading fontSize="16px">{dish.name}</Heading>
          <Text fontSize="14px" marginTop="10px" color="blue.400">
            {itemTotal.toFixed(2)} €
          </Text>
        </Box>
      </Flex>
      <CheckoutItemQuantity dish={dish} />
    </Flex>
  );
}

export default CheckoutItemCard;
