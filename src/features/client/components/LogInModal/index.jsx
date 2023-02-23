import {
  ButtonGroup,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
  Center,
  Flex,
  Input,
} from '@chakra-ui/react';

function LogInModal({ isOpen, onClose }) {
  return (
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
            Earum ratione itaque mollitia. Ea quibusdam dolorem rem consequatur
            a aliquid suscipit, corrupti porro fuga. Obcaecati odit saepe a iure
            at.
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LogInModal;
