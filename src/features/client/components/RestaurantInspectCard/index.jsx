import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import RestaurantInspectModal from '../RestaurantInspectModal';

function RestaurantInspectCard({ deal }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="button"
      onClick={onOpen}
      width="100%"
      maxW={{ base: '100%', md: '45%', lg: '30%' }}
      border="1px solid lightgray"
      rounded="md"
      padding="10px"
      _hover={{ transform: 'scale(1.01)' }}
    >
      <Flex justifyContent="space-between">
        <Flex flexDir="column" justifyContent="space-between">
          <Box marginBottom="20px" textAlign="left" maxW="80%">
            <Heading fontSize="18px">{deal.recipeName}</Heading>
            <Text fontSize="14px" wordBreak="break-word" color="lightslategray">
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
        <Box overflow="hidden" rounded="md" maxW={{ base: '30%', md: '40%' }}>
          <Image src={deal.recipeThumb} height="100%" objectFit="cover" />
        </Box>
      </Flex>
      <RestaurantInspectModal deal={deal} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default RestaurantInspectCard;
