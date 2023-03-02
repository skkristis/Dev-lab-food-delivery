import {
  Button,
  Text,
  Flex,
  Heading,
  Image,
  Box,
  Center,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../../../store/reducers/cartReducer';

function CartSideBar({ cartItems }) {
  const dispatch = useDispatch();

  const orderTotal = cartItems.length
    ? cartItems
        .reduce((acc, curr) => {
          const currValue = +curr.recipePrice;
          return acc + currValue * curr.quantity;
        }, 0)
        .toFixed(2)
    : '0';

  const increaseQuantity = (id) => dispatch(increaseItemQuantity(id));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity(id));

  return (
    <Flex height="100%" direction="column" position="relative">
      <Box bg="white" height="400px">
        <Flex direction="column" height="100%">
          <Stack padding="0 20px" alignItems="left">
            <Text fontSize="20px" color="rgb(118, 118, 118)">
              Your order from
            </Text>
            <Heading mt="0" fontSize="26px">
              BFD.LT
            </Heading>
          </Stack>
          <Box
            padding="0px 20px"
            mt="20px"
            mb="20px"
            maxHeight="300px"
            overflow="auto"
            overflowX="hidden"
          >
            {cartItems.map((item, i) => {
              const itemTotal = (+item.recipePrice * item.quantity).toFixed(2);
              return (
                <Flex
                  key={i}
                  marginBottom="10px"
                  justifyContent="space-between"
                >
                  <Flex>
                    <Center
                      overflow="hidden"
                      rounded="md"
                      height="60px"
                      marginRight="10px"
                      minWidth="100px"
                      width="30%"
                      maxHeight="150px"
                    >
                      <Image src={item.recipeThumb} rounded="md" />
                    </Center>
                    <Center>
                      <Box>
                        <Heading fontSize="16px">{item.recipeName}</Heading>
                        <Text fontSize="14px" marginTop="10px" color="blue.400">
                          €{itemTotal}
                        </Text>
                      </Box>
                    </Center>
                  </Flex>
                  <Flex alignItems="center" gap="5px">
                    <Button
                      onClick={() => decreaseQuantity(item.id)}
                      background="none"
                    >
                      -
                    </Button>
                    <Text>{item.quantity}</Text>
                    <Button
                      onClick={() => increaseQuantity(item.id)}
                      background="none"
                    >
                      +
                    </Button>
                  </Flex>
                </Flex>
              );
            })}
          </Box>
          <Spacer />
          <Box>
            <Button
              width="100%"
              bg="blue.400"
              color="white"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              rounded="lg"
              borderRadius="24px"
            >
              <Box as="p">
                <Box
                  as="span"
                  padding="2px 8px"
                  bg="white"
                  rounded="xl"
                  color="blue.400"
                  fontSize="12px"
                  marginRight="10px"
                >
                  {cartItems.length}
                </Box>
                Go to checkout
              </Box>
              <Text>{orderTotal}</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default CartSideBar;
