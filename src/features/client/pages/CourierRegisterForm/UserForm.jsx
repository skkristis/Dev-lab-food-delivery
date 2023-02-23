import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  ModalFooter,
  Button,
  useDisclosure,
  Flex,
  Box,
  Input,
} from '@chakra-ui/react';

const UserForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    return data;
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="column" alignItems="center">
          <Box>
            <Text>First name</Text>
            <Input size="lg" width="300px" {...register('firstName')} />
          </Box>
          <Box>
            <Text>Last name</Text>
            <Input size="lg" width="300px" {...register('lastName')} />
          </Box>
          <Box>
            <Text>Email</Text>
            <Input size="lg" width="300px" {...register('email')} />
          </Box>
          <Box>
            <Text>Password</Text>
            <Input
              type="password"
              size="lg"
              width="300px"
              {...register('password')}
            />
          </Box>
          <Box>
            <Text>Phone Number</Text>
            <Input size="lg" width="300px" {...register('phoneNumber')} />
          </Box>
          <Box>
            <Text>Date of birth</Text>
            <Input type="date" size="lg" width="300px" {...register('date')} />
          </Box>
          <Button
            type="submit"
            onClick={onOpen}
            m={5}
            colorScheme="black"
            variant="outline"
          >
            Submit
          </Button>
        </Flex>
      </form>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="green">Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You&apos;ve successfully submitted form!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default UserForm;
