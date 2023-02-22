import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { restaurants } from "../../mockData";
import bicycleUrl from "../../../../assets/bicycle-icon.svg";

function RestaurantList() {
  return (
    <Box as="section" className="container">
      <Heading>All Restaurants</Heading>
      <Flex flexWrap="wrap" gap="2">
        {restaurants.map((restaurant) => {
          return (
            <LinkBox
              as={Link}
              width="100%"
              maxW="32%"
              borderWidth="1px"
              rounded="md"
              display="flex"
              flexDir="column"
              gap="2"
              to="/restaurantinspect"
            >
              <Image src={restaurant.restaurantThumb} width="100%" />
              <Flex gap="15px" justifyContent="space-between" p="5">
                <Box>
                  <Heading fontSize="14px">
                    <LinkOverlay href="#">
                      {`${restaurant.restaurantName} (${restaurant.restaurantAddress})`}
                    </LinkOverlay>
                  </Heading>
                  <Text>{restaurant.restaurantBio}</Text>
                </Box>
                <Box>
                  <Text bg="lightgray" rounded="md" p="5px">
                    {restaurant.restaurantDeliveryTime}
                    <br />
                    min
                  </Text>
                </Box>
              </Flex>
              <Flex gap="2" p="2" borderTop="1px solid lightgray">
                <Image src={bicycleUrl} width="20px" />
                {`€${restaurant.restaurantDeliveryPrice} ☆${restaurant.restaurantRating}`}
              </Flex>
            </LinkBox>
          );
        })}
      </Flex>
    </Box>
  );
}

export default RestaurantList;
