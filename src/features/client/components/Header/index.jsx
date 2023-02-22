import { Link as ReachLink } from 'react-router-dom';
import {
  Box,
  ButtonGroup,
  Link,
  Image,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  Center,
  Flex,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import logoUrl from '../../../../assets/application-logo.svg';

import './index.css';

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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an account or log in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir="column" gap="20px">
              <ButtonGroup display="flex" flexDirection="column" gap="3">
                <Text>Log in below or create a new account.</Text>
                <Button marginInline="0px">Continue with Google</Button>
                <Button marginInline="0px" color="white" bg="black">
                  Continue with Apple
                </Button>
                <Button marginInline="0px" color="white" bg="blue">
                  Continue with Facebook
                </Button>
              </ButtonGroup>
              <Center gap="2">
                <Divider orientation="horizontal" width="30%" height="2px" />
                <Text width="fit-content">or log in with email</Text>
                <Divider orientation="horizontal" width="30%" height="2px" />
              </Center>
              <Input placeholder="Email" />
              <Button colorScheme="blue">Next</Button>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Text fontSize="10px">
              Privacy & Terms of service disclaimer. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nostrum ab inventore modi beatae,
              repellat iste delectus dolorem dicta asperiores quidem quo
              consequatur eos sapiente corporis, quas impedit sunt quibusdam!
              Earum ratione itaque mollitia. Ea quibusdam dolorem rem
              consequatur a aliquid suscipit, corrupti porro fuga. Obcaecati
              odit saepe a iure at.
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Header;
