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

import { basket } from '../../mocks/basketMock';
import logoUrl from '../../../../assets/application-logo.svg';
import LogInModal from '../LogInModal';
import BasketModal from '../BasketModal';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="header"
        height="110px"
        position="fixed"
        left="0"
        right="0"
        top="0"
        zIndex="5"
        borderBottom="1px solid lightgray"
        bg="white"
        display="flex"
        flexDirection="column"
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
          <Box>
            <ButtonGroup gap={{ base: '5px', sm: '20px' }}>
              <Button onClick={onOpen} variant="ghost">
                Log In
              </Button>
              <Button onClick={onOpen} colorScheme="blue" color="white">
                Sign up
              </Button>
            </ButtonGroup>
            <BasketModal basket={basket} />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          height="60px"
          alignItems="center"
        >
          <ButtonGroup gap={{ base: '5px', sm: '20px' }}>
            <Button
              as={ReachLink}
              to="/subscriptions"
              colorScheme="blue"
              color="white"
              whiteSpace="normal"
              flex="1"
              size="md"
              textAlign="center"
              paddingTop="5px"
              paddingBottom="5px"
              height="auto"
            >
              Restaurant registration
            </Button>
            <Button
              as={ReachLink}
              to="/courier"
              colorScheme="blue"
              color="white"
              whiteSpace="normal"
              flex="1"
              size="md"
              textAlign="center"
              paddingTop="5px"
              paddingBottom="5px"
              height="auto"
            >
              Courier registration
            </Button>
            <Button
              as={ReachLink}
              to="/admin"
              colorScheme="blue"
              color="white"
              whiteSpace="normal"
              flex="1"
              size="md"
              textAlign="center"
              paddingTop="5px"
              paddingBottom="5px"
              height="auto"
            >
              Admin panel
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <LogInModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Header;
