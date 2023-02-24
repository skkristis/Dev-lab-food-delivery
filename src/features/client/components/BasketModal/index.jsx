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

function BasketModal({ basket }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const orderTotal = basket.length
    ? basket.reduce((acc, curr) => {
        const currValue = +curr.recipePrice;
        return acc + currValue * curr.recipeQauntity;
      }, 0)
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
          {basket.length}
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
            {basket.map((deal, i) => {
              const itemTotal = +deal.recipePrice * deal.recipeQauntity;
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
                        src={deal.recipeThumb}
                        marginRight="10px"
                        rounded="md"
                      />
                    </Box>
                    <Box>
                      <Heading fontSize="16px">{deal.recipeName}</Heading>
                      <Text fontSize="14px" marginTop="10px" color="blue.400">
                        €{itemTotal}
                      </Text>
                    </Box>
                  </Flex>
                  <Button>{deal.recipeQauntity}</Button>
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
                  {basket.length}
                </Box>
                Go to checkout
              </Box>
              <Text>{orderTotal.toFixed(2)}</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasketModal;
