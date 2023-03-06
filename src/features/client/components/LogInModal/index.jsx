import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

function LogInModal({
  isOpen,
  onClose,
  setIsLoggedIn,
  isLoggedIn,
  onSignupModalOpen,
}) {
  const location = useLocation();
  const pathnameCheckout = location.pathname === '/checkout';
  const loggedOutCheckout = !isLoggedIn && pathnameCheckout;

  console.log(loggedOutCheckout);

  return (
    <Modal
      isOpen={loggedOutCheckout ? true : isOpen}
      onClose={onClose}
      closeOnOverlayClick={loggedOutCheckout ? false : true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in with email</ModalHeader>
        {!loggedOutCheckout && <ModalCloseButton />}
        <ModalBody>
          <Flex flexDir="column" gap="20px">
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button onClick={() => setIsLoggedIn(true)} colorScheme="blue">
              Log in
            </Button>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Stack>
            <Text fontSize="10px">
              Privacy & Terms of service disclaimer. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nostrum ab inventore modi beatae,
              repellat iste delectus dolorem dicta asperiores quidem quo
              consequatur eos sapiente corporis, quas impedit sunt quibusdam!
              Earum ratione itaque mollitia. Ea quibusdam dolorem rem
              consequatur a aliquid suscipit, corrupti porro fuga. Obcaecati
              odit saepe a iure at.
            </Text>
            <Link
              fontSize="14px"
              color="blue.400"
              as="button"
              onClick={onSignupModalOpen}
            >
              Not an existing user? Sign up here!
            </Link>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LogInModal;
