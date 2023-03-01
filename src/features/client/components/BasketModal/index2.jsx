import { Button, Text, Flex, Heading, Image, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { changeAmount } from '../../../../store/reducers/cartReducer';

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

  return (
    <>
      <Box bg="white">
        <Box>
          <Box>
            <Heading>Your order</Heading>
          </Box>
          <Box padding="20px">
            {cartItems.map((item, i) => {
              const itemTotal = (+item.recipePrice * item.quantity).toFixed(2);
              return (
                <Flex
                  key={i}
                  marginBottom="10px"
                  justifyContent="space-between"
                >
                  <Flex>
                    <Box
                      overflow="hidden"
                      rounded="md"
                      height="60px"
                      width="20%"
                      marginRight="10px"
                    >
                      <Image
                        src={item.recipeThumb}
                        marginRight="10px"
                        rounded="md"
                      />
                    </Box>
                    <Box>
                      <Heading fontSize="16px">{item.recipeName}</Heading>
                      <Text fontSize="14px" marginTop="10px" color="blue.400">
                        €{itemTotal}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex alignItems="center" gap="5px">
                    <Button
                      onClick={() =>
                        dispatch(changeAmount({ id: item.id, index: -1 }))
                      }
                      background="none"
                    >
                      -
                    </Button>
                    <Text>{item.quantity}</Text>
                    <Button
                      onClick={() =>
                        dispatch(changeAmount({ id: item.id, index: 1 }))
                      }
                      background="none"
                    >
                      +
                    </Button>
                  </Flex>
                </Flex>
              );
            })}
          </Box>

          <Box width="100%">
            <Button
              width="100%"
              bg="blue.400"
              color="white"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
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
        </Box>
      </Box>
    </>
  );
}

export default CartSideBar;
