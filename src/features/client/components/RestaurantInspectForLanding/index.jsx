import { Box, Flex, Heading } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { restaurantInspectMock } from '../../mocks/restaurantInspectMock';
import RestaurantInspectModal from '../RestaurantInspectModal';
import { useMediaQuery } from '@chakra-ui/react';

function RestaurantInspectForLanding({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [smallerScreen] = useMediaQuery('(max-width: 750px)');
  return (
    <Box
      as="button"
      onClick={onOpen}
      border="1px solid lightgray"
      minWidth={smallerScreen ? '200px' : '270px'}
      minHeight="200px"
      rounded="md"
      _hover={{ transform: 'scale(1.01)' }}
      position="relative"
      backgroundImage={item.recipeThumb}
      backgroundSize="cover"
    >
      <Box
        position="absolute"
        bottom="0"
        backgroundColor="rgba(0, 0, 0, 0.7)"
        width="100%"
        p={2}
      >
        <Flex flexDirection="column">
          <Heading color="white" textAlign="left" fontSize="1xl">
            {item.recipeName}
          </Heading>
          <Flex flexDirection="row" justifyContent="space-between">
            <Box display="inline-block" width="auto" color="white">
              {restaurantInspectMock.restaurantName}
            </Box>
            <Box color="white">{item.recipePrice}</Box>
          </Flex>
        </Flex>
      </Box>
      <RestaurantInspectModal deal={item} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default RestaurantInspectForLanding;
