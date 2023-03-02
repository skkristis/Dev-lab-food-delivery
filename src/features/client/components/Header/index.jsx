import { Link as ReachLink } from 'react-router-dom';
import {
  Box,
  ButtonGroup,
  Link,
  Image,
  Button,
  useDisclosure,
  Flex,
  Input,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

import { basket } from '../../mocks/basketMock';
import logoUrl from '../../../../assets/application-logo.svg';
import LogInModal from '../LogInModal';

import CartDrawer from '../CartDrawer';
import SignUpModal from '../SignupModal';
import LoggedInUserHeader from '../LoggedInUserHeader';
import DeliverToButton from '../DeliverToButton';
import UserMenu from '../UserMenu';

function Header() {
  const {
    isOpen: isLoginModalOpen,
    onOpen: onLoginModalOpen,
    onClose: onLoginModalClose,
  } = useDisclosure();
  const {
    isOpen: isSignupModalOpen,
    onOpen: onSignupModalOpen,
    onClose: onSignupModalClose,
  } = useDisclosure();
  const [smallerScreen] = useMediaQuery('(max-width: 800px)');

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Box
        as="header"
        height="150px"
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
          <Flex flexWrap="wrap" gap="10px" alignItems="center" width="35%">
            <Link as={ReachLink} to="/">
              <Image boxSize="30px" src={logoUrl} />
            </Link>
            <DeliverToButton />
          </Flex>
          <Box>
            {isLoggedIn ? (
              <Flex>
                <LoggedInUserHeader setIsLoggedIn={setIsLoggedIn} />
                <CartDrawer />
              </Flex>
            ) : (
              <>
                <ButtonGroup gap={{ base: '5px', sm: '20px' }}>
                  <Button onClick={onLoginModalOpen} variant="ghost">
                    Log In
                  </Button>
                  <Button
                    onClick={onSignupModalOpen}
                    colorScheme="blue"
                    color="white"
                  >
                    Sign up
                  </Button>
                </ButtonGroup>
                <CartDrawer />
              </>
            )}
          </Box>
          <Input
            color="white"
            bg="lightgray"
            placeholder={
              smallerScreen
                ? 'Search for meal...'
                : 'Search for cuisine, meal, restaurant...'
            }
            width={smallerScreen ? '40%' : '300px'}
            borderRadius="50px"
          />
          {smallerScreen ? (
            <>
              <UserMenu
                onLoginModalOpen={onLoginModalOpen}
                onSignupModalOpen={onSignupModalOpen}
              />
            </>
          ) : (
            <>
              <ButtonGroup gap={{ base: '5px', sm: '20px' }}>
                <Button onClick={onLoginModalOpen} variant="ghost">
                  Log In
                </Button>
                <Button
                  onClick={onSignupModalOpen}
                  colorScheme="blue"
                  color="white"
                >
                  Sign up
                </Button>
              </ButtonGroup>
            </>
          )}
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
      <LogInModal isOpen={isLoginModalOpen} onClose={onLoginModalClose} />
      <SignUpModal isOpen={isSignupModalOpen} onClose={onSignupModalClose} />
    </>
  );
}

export default Header;
