import {
  Box,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import { categories } from "../../mockData";

function Categories() {
  return (
    <Box as="section" className="container">
      <Heading>Categories</Heading>
      <Flex flexWrap="wrap" gap="2">
        {categories.map((category) => {
          return (
            <LinkBox as="article" maxW="150px" borderWidth="1px" rounded="md">
              <Image src={category.categoryThumb} />
              <Box p="3">
                <Heading fontSize="14px">
                  <LinkOverlay href="#">{category.category}</LinkOverlay>
                </Heading>
              </Box>
            </LinkBox>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Categories;
