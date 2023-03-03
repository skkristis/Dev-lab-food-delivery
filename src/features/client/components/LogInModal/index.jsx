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
} from '@chakra-ui/react';

function LogInModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in with email</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" gap="20px">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
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
