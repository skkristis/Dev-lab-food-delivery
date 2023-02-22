import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import './index.css';

const mockRestaurant = {
  restaurantName: 'Jammi',
  restaurantAddress: 'Tauro Kalnas',
  restaurantBio: 'Fast food restaurant',
  restaurantRating: '7.5',
  restaurantThumb:
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  restaurantMenu: [
    {
      sectionName: 'Burritoes',
      deals: [
        {
          recipeName: 'Burrito',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
        {
          recipeName: 'Burrito',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
        {
          recipeName: 'Burrito',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
        {
          recipeName: 'Burrito',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
      ],
    },
    {
      sectionName: 'Veggie menu',
      deals: [
        {
          recipeName: 'Veggie salad',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
        {
          recipeName: 'Veggie salad',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.5',
        },
        {
          recipeName: 'Veggie salad',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.2',
        },
        {
          recipeName: 'Veggie salad',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
        {
          recipeName: 'Veggie salad',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
      ],
    },
    {
      sectionName: 'Burgers',
      deals: [
        {
          recipeName: 'Chicken burger',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
        {
          recipeName: 'Hamburger',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
        {
          recipeName: 'Cheeseburger',
          recipeBio: 'Cucumber, bread, tomatoes, coleslaw, onion, meat, sauce',
          price: '5.4',
        },
      ],
    },
  ],
};

function RestaurantInspect() {
  return (
    <Box as="section" marginTop="50px">
      <Box position="relative">
        <Image
          src={mockRestaurant.restaurantThumb}
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
          <Heading>{`${mockRestaurant.restaurantName} (${mockRestaurant.restaurantAddress})`}</Heading>
          <Text>{mockRestaurant.restaurantBio}</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default RestaurantInspect;
