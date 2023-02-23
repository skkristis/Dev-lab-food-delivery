import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './index.css';

function RestaurantInspect() {
  const restaurantInfo = useLoaderData();

  return (
    <Box as="section" marginTop="50px">
      <Box position="relative">
        <Image
          src={restaurantInfo.restaurantThumb}
          position="absolute"
          left="0"
          right="0"
          top="-50vw"
          zIndex="-2"
          width="100%"
        />
        <Box
          bg="black"
          opacity="0.4"
          position="absolute"
          left="0"
          right="0"
          top="-50vw"
          zIndex="-1"
          width="100%"
          height="100vh"
        ></Box>

        <Box paddingBlock="50px" color="white" paddingInline="30px">
          <Heading>{`${restaurantInfo.restaurantName} (${restaurantInfo.restaurantAddress})`}</Heading>
          <Text>{restaurantInfo.restaurantBio}</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default RestaurantInspect;
