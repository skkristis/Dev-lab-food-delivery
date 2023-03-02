import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/reducers/cartReducer';
import RestaurantInspectModal from '../RestaurantInspectModal';

function RestaurantInspectCard({ deal, cartOpened }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const addItemToCart = (deal) => dispatch(addToCart({ ...deal, quantity: 1 }));
  return (
    <Flex
      gap="5px"
      width="100%"
      maxW={
        cartOpened
          ? { base: '100%', xl: '45%' }
          : { base: '100%', lg: '45%', xl: '30%' }
      }
      border="1px solid lightgray"
      rounded="md"
      padding="10px"
      alignItems="center"
      _hover={{ transform: 'scale(1.01)' }}
    >
      <Box as="button" onClick={onOpen}>
        <Flex justifyContent="space-between">
          <Flex flexDir="column" justifyContent="space-between">
            <Box marginBottom="20px" textAlign="left" maxW="80%">
              <Heading fontSize="18px">{deal.recipeName}</Heading>
              <Text
                fontSize="14px"
                wordBreak="break-word"
                color="lightslategray"
              >
                {deal.recipeBio}
              </Text>
            </Box>
            <Flex alignItems="center">
              <Text fontSize="16px" paddingRight="20px">
                €{deal.recipePrice}
              </Text>
              {deal.popular && (
                <Text
                  fontSize={{
                    base: '10px',
                    md: '12px',
                    lg: '14px',
                  }}
                  bg="blue.400"
                  color="white"
                  padding="4px 5px"
                  rounded="md"
                  fontWeight="600"
                >
                  Popular
                </Text>
              )}
            </Flex>
          </Flex>
          <Box overflow="hidden" rounded="md" maxW={{ base: '40%', md: '50%' }}>
            <Image src={deal.recipeThumb} height="100%" objectFit="cover" />
          </Box>
        </Flex>
        <RestaurantInspectModal deal={deal} isOpen={isOpen} onClose={onClose} />
      </Box>
      <Button onClick={() => addItemToCart(deal)}>+</Button>
    </Flex>
  );
}

export default RestaurantInspectCard;
