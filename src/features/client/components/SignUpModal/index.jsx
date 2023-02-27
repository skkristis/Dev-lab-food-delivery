import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import './index.scss';

function SignUpModal({ isOpen, onClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    return data;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create An Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" gap="20px">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <Flex mb={2}>
                <Input
                  placeholder="Name"
                  marginRight="2"
                  {...register('firstName')}
                />
                <Input placeholder="Surname" {...register('lastName')} />
              </Flex>
              <Input placeholder="Email" {...register('email')} mb={2} />
              <Input
                type="password"
                placeholder="Password"
                {...register('password')}
                mb={2}
              />
              <Button type="submit" colorScheme="blue" mb={3}>
                Register
              </Button>
            </form>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SignUpModal;
