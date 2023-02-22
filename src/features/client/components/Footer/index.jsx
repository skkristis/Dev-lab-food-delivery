import {
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Box,
  Image,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';

import appleStoreUrl from '../../../../assets/get-on-apple-store.svg';
import googleStoreUrl from '../../../../assets/get-on-google-store.png';
import './index.css';

function Footer() {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      marginTop="50px"
      padding="100px 20px 5px 20px"
    >
      <Flex
        justifyContent="space-between"
        flexDir={{ base: 'column', md: 'row' }}
        alignItems="center"
        gap="20px"
      >
        <Box
          display="flex"
          flexDir={{ base: 'column', sm: 'row', md: 'column' }}
          gap="10px"
        >
          <Link>
            <Image src={appleStoreUrl} minW="120px" maxW="120px" />
          </Link>
          <Link>
            <Image src={googleStoreUrl} minW="120px" maxW="120px" />
          </Link>
        </Box>
        <Box width="100%" textAlign={{ base: 'center', md: 'left' }}>
          <Heading
            marginBottom="10px"
            fontSize={{ base: '14px', md: '14px', lg: '16px' }}
            color="gray"
          >
            Let's do this together
          </Heading>
          <UnorderedList
            listStyleType="none"
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
            marginInlineStart="0"
            display="flex"
            gap="5px"
            flexDir={{ base: 'column', sm: 'row', md: 'column' }}
            justifyContent="space-between"
          >
            <ListItem>
              <Link>Lorem ipsum </Link>
            </ListItem>
            <ListItem>
              <Link>Consectetur </Link>
            </ListItem>
            <ListItem>
              <Link>Integer molestie </Link>
            </ListItem>
            <ListItem>
              <Link>Facilisis in </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box width="100%" textAlign={{ base: 'center', md: 'left' }}>
          <Heading
            marginBottom="10px"
            fontSize={{ base: '14px', md: '14px', lg: '16px' }}
            color="gray"
          >
            Company
          </Heading>
          <UnorderedList
            listStyleType="none"
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
            marginInlineStart="0"
            display="flex"
            gap="5px"
            flexDir={{ base: 'column', sm: 'row', md: 'column' }}
            justifyContent="space-between"
          >
            <ListItem>
              <Link>Lorem ipsum </Link>
            </ListItem>
            <ListItem>
              <Link>Consectetur </Link>
            </ListItem>
            <ListItem>
              <Link>Integer molestie </Link>
            </ListItem>
            <ListItem>
              <Link>Facilisis in </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box width="100%" textAlign={{ base: 'center', md: 'left' }}>
          <Heading
            marginBottom="10px"
            fontSize={{ base: '14px', md: '14px', lg: '16px' }}
            color="gray"
          >
            Useful links
          </Heading>
          <UnorderedList
            listStyleType="none"
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
            marginInlineStart="0"
            display="flex"
            gap="5px"
            flexDir={{ base: 'column', sm: 'row', md: 'column' }}
            justifyContent="space-between"
          >
            <ListItem>
              <Link>Lorem ipsum </Link>
            </ListItem>
            <ListItem>
              <Link>Consectetur </Link>
            </ListItem>
            <ListItem>
              <Link>Integer molestie </Link>
            </ListItem>
            <ListItem>
              <Link>Facilisis in </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box width="100%" textAlign={{ base: 'center', md: 'left' }}>
          <Heading
            marginBottom="10px"
            fontSize={{ base: '14px', md: '14px', lg: '16px' }}
            color="gray"
          >
            Follow us
          </Heading>
          <UnorderedList
            listStyleType="none"
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
            marginInlineStart="0"
            display="flex"
            gap="5px"
            flexDir={{ base: 'column', sm: 'row', md: 'column' }}
            justifyContent="space-between"
          >
            <ListItem>
              <Link>Lorem ipsum </Link>
            </ListItem>
            <ListItem>
              <Link>Consectetur </Link>
            </ListItem>
            <ListItem>
              <Link>Integer molestie </Link>
            </ListItem>
            <ListItem>
              <Link>Facilisis in </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        marginTop="50px"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <UnorderedList
          listStyleType="none"
          fontSize="12px"
          marginInlineStart="0"
          display="flex"
        >
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Lithuania
            </Button>
          </ListItem>
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              English
            </Button>
          </ListItem>
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Accesibility
            </Button>
          </ListItem>
        </UnorderedList>
        <UnorderedList
          listStyleType="none"
          marginInlineStart="0"
          display="flex"
          flexWrap="wrap"
        >
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Accesibility Statemnet
            </Button>
          </ListItem>
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Terms and Conditions
            </Button>
          </ListItem>
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Privacy policy
            </Button>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Box>
  );
}

export default Footer;
