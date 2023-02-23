import { Link as ReachLink } from 'react-router-dom';
import {
  Box,
  ButtonGroup,
  Link,
  Image,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import logoUrl from '../../../../assets/application-logo.svg';
import LogInModal from '../LogInModal';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="header"
        height="50px"
        position="fixed"
        left="0"
        right="0"
        top="0"
        zIndex="5"
        borderBottom="1px solid lightgray"
        bg="white"
      >
        <Box
          className="container"
          height="50px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link as={ReachLink} to="/">
            <Image boxSize="30px" src={logoUrl} />
          </Link>
          <ButtonGroup gap="20px">
            <Button onClick={onOpen} variant="ghost">
              Log In
            </Button>
            <Button onClick={onOpen} colorScheme="blue" color="white">
              Sign up
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <LogInModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Header;
