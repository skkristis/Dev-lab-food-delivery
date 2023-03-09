import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import bicycleUrl from '../../../../assets/bicycle-icon.svg';
import placeholderRestaurantUrl from '../../../../assets/placeholder-restaurant.jpg';

function RestaurantListCard({ restaurant }) {
  return (
    <LinkBox
      as={Link}
      width="100%"
      maxW={{ base: '100%', md: '49%', lg: '32%' }}
      borderWidth="1px"
      rounded="md"
      overflow="hidden"
      display="flex"
      flexDir="column"
      gap="2"
      to={`/restaurants/${restaurant.id}`}
      bg="white"
      _hover={{ transform: 'scale(1.01)' }}
      transition="0.3s"
    >
      <Box height="150px" overflow="hidden" position="relative">
        <Image
          src={restaurant.thumbnail || placeholderRestaurantUrl}
          boxSize="100%"
          objectFit="cover"
        />
        {restaurant.is_closed && (
          <Box
            position="absolute"
            top="0"
            right="0"
            left="0"
            bottom="0"
            bg="black"
            opacity="0.7"
          >
            <Center
              as="h3"
              height="100%"
              textAlign="center"
              color="white"
              fontSize="20px"
            >
              Closed
            </Center>
          </Box>
        )}
      </Box>
      <Flex gap="15px" justifyContent="space-between" alignItems="center" p="3">
        <Box maxW="80%">
          <Heading fontSize="14px">
            <LinkOverlay as="div">{`${restaurant.full_name} `}</LinkOverlay>
          </Heading>

          <Text
            maxH="20px"
            maxW="90%"
            whiteSpace="nowrap"
            display="inline-block"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {restaurant.bio}
          </Text>
        </Box>
        <Box>
          <Text
            bg="lightgray"
            rounded="md"
            p="5px"
            textAlign="center"
            lineHeight="20px"
          >
            {restaurant.delivery_text}
          </Text>
        </Box>
      </Flex>
      <Flex gap="2" p="2" borderTop="1px dashed lightgray">
        <Image src={bicycleUrl} width="20px" />
        {`${restaurant.delivery_cost}  ${restaurant.rating} ☆`}
      </Flex>
    </LinkBox>
  );
}

export default RestaurantListCard;
