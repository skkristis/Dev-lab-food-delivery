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

import { useDispatch } from 'react-redux';
import { add } from '../../../../store/reducers/userReducer';
import { useForm } from 'react-hook-form';
import auth from '../../../../services/AuthService';

function LogInModal({ isOpen, onClose, onSignupModalOpen }) {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await auth.login(data.email, data.password);

      dispatch(add({ email: data.email, password: data.password }));
      onClose();
    } catch (e) {
      const errors = e.response?.data?.errors;

      if (errors.email) {
        setError('email', {
          type: 'server',
          message: errors.email[0],
        });
      }
      if (errors.password) {
        setError('password', {
          type: 'server',
          message: errors.password[0],
        });
      }
    }
  };

  const handleOpenSignup = () => {
    onClose();
    onSignupModalOpen();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in with email</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            as="form"
            flexDir="column"
            gap="20px"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input placeholder="Email" {...register('email')} />
            <Text color="red" display={errors.email ? 'block' : 'none'}>
              {errors.email && errors.email.message}
            </Text>

            <Input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            <Text color="red" display={errors.password ? 'block' : 'none'}>
              {errors.password && errors.password.message}
            </Text>

            <Button type="submit" colorScheme="blue">
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
              onClick={handleOpenSignup}
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
