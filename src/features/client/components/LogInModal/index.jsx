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
  FormErrorMessage,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../../store/reducers/userReducer';
import { useForm } from 'react-hook-form';

function LogInModal({ isOpen, onClose, onSignupModalOpen }) {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const axiosErrors = useSelector((state) => state.user.errors);

  const onSubmit = (data) => {
    dispatch(add({ email: data.email, password: data.password }));

    setError('password', { type: 'custom', message: 'custom message' });
    console.log(errors);
    // onClose();
    // reset();
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
            <Input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            <Text>{errors.password?.message}</Text>
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
