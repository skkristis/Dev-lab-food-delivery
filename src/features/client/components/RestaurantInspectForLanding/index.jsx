import { Box, Flex, Heading } from '@chakra-ui/react';
import noImage from '../../../../assets/no-image.jpg';
import { useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function RestaurantInspectForLanding({ item }) {
  console.log(item)
  const [smallerScreen] = useMediaQuery('(max-width: 750px)');
  return (
    <Box
      as={Link}
      to={`/restaurants/${item.merchant.id}`}
      border="1px solid lightgray"
      minWidth={smallerScreen ? '200px' : '270px'}
      minHeight="200px"
      rounded="md"
      _hover={{ transform: 'scale(1.01)' }}
      position="relative"
      backgroundImage={item.thumbnail || noImage }
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
            {item.name}
          </Heading>
          <Flex flexDirection="row" justifyContent="space-between">
            <Box display="inline-block" color="white" height="20px">
              {item.merchant.name}
            </Box>
            <Box color="white">{item.price}€</Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default RestaurantInspectForLanding;
