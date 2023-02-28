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
import { Checkbox } from '@chakra-ui/react';
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
              <Checkbox
                colorScheme="blue"
                {...register('age_agreement')}
                display="block"
              >
                I&apos;m older than <b>18</b> years old.
              </Checkbox>
              <Checkbox
                colorScheme="blue"
                {...register('terms_agreement')}
                display="block"
              >
                I read and agree to the terms and conditions.
              </Checkbox>
              <Button type="submit" colorScheme="blue" mb={4}>
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
