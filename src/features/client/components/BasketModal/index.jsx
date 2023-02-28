import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Heading,
  Image,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import basketUrl from '../../../../assets/basket-icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { changeAmount } from '../../../../store/reducers/cartReducer';

function BasketModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems = useSelector((store) => store.cart.list);
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
      <Button onClick={onOpen} variant="ghost" position="relative">
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
          {cartItems.length
            ? cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
            : 0}
        </Text>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: 'sm', sm: 'md', md: 'lg' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading>Your order</Heading>
          </ModalHeader>
          <ModalCloseButton bg="lightgray" rounded="xl" />
          <ModalBody padding="20px">
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
          </ModalBody>

          <ModalFooter width="100%">
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasketModal;
