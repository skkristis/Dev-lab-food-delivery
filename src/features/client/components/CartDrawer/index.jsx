import {
  Button,
  Text,
  Flex,
  Heading,
  Image,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Center,
} from '@chakra-ui/react';
import basketUrl from '../../../../assets/basket-icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../../../store/reducers/cartReducer';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

function CartDrawer() {
  const location = useLocation();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    location.pathname.includes('/restaurants/')
      ? setVisible(true)
      : setVisible(false);
  }, [location.pathname]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems = useSelector((store) => store.cart.list);
  const dispatch = useDispatch();

  const increaseQuantity = (id) => dispatch(increaseItemQuantity(id));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity(id));

  const orderTotal = cartItems.length
    ? cartItems
        .reduce((acc, curr) => {
          const currValue = +curr.recipePrice;
          return acc + currValue * curr.quantity;
        }, 0)
        .toFixed(2)
    : '0';

  const quantityTotal = () =>
    cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <Button
        onClick={onOpen}
        variant="ghost"
        position="relative"
        display={
          visible ? { base: 'inline-block', md: 'none' } : { base: 'none' }
        }
      >
        <Image src={basketUrl} boxSize="30px" />
        <Text
          padding="2px 8px"
          bg="blue.400"
          rounded="xl"
          color="white"
          fontSize="12px"
          position="absolute"
          bottom="0"
          right="0"
        >
          {cartItems.length ? quantityTotal() : 0}
        </Text>
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} size="100%">
        <DrawerContent>
          <DrawerHeader>
            <Heading>Your order</Heading>
          </DrawerHeader>
          <DrawerCloseButton bg="lightgray" rounded="xl" />
          <DrawerBody padding="0px 20px 20px 20px" mt="20px">
            {cartItems.map((item, i) => {
              const itemTotal = (+item.recipePrice * item.quantity).toFixed(2);
              return (
                <Flex
                  key={i}
                  marginBottom="10px"
                  justifyContent="space-between"
                  minHeight="80px"
                >
                  <Flex>
                    <Center
                      overflow="hidden"
                      rounded="md"
                      minWidth="100px"
                      width="30%"
                      maxHeight="150px"
                      marginRight="10px"
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
          </DrawerBody>

          <DrawerFooter width="100%">
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
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CartDrawer;
