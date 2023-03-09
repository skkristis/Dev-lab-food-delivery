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
import { useRef } from 'react';
import { Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { add } from '../../../../store/reducers/userReducer';
import auth from '../../../../services/AuthService';

import './index.scss';

function SignUpModal({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch('password');
  password.confirm = watch('confirmPassword');

  const onSubmit = (data) => {
    const userdata = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      termsAgree: data.termsAgreement,
    };

    const isPasswordMatch = validatePasswordMatch();
    if (!isPasswordMatch) {
      return;
    }
    auth.register(userdata).then(() => {
      dispatch(add({ email: userdata.email, password: userdata.password }));
      onClose();
      reset();
    });
  };

  const validatePasswordMatch = () => {
    if (password.current !== password.confirm) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return false;
    }
    return true;
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
              <Input
                type="password"
                placeholder="Confirm password"
                {...register('confirmPassword')}
                mb={2}
              />
              {errors.confirmPassword && (
                <Text color="red">Passwords do not match</Text>
              )}
              <Checkbox
                colorScheme="blue"
                {...register('termsAgreement')}
                display="block"
              >
                I read and agree to the terms and conditions.
              </Checkbox>
              <Button type="submit" colorScheme="blue" mt={3} mb={3}>
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
