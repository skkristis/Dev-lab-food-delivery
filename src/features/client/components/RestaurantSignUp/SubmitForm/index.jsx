import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Checkbox,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import './index.scss';

function SubmitForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [checkBoxes, setCheckBoxes] = useState({
    webshopChecked: false,
    inAppChecked: false,
  });

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const toggleCheckedState = (checkboxName) => {
    return checkboxName === 'webshop'
      ? setCheckBoxes({
          ...checkBoxes,
          webshopChecked: !checkBoxes.webshopChecked,
        })
      : setCheckBoxes({
          ...checkBoxes,
          inAppChecked: !checkBoxes.inAppChecked,
        });
  };

  const onSubmit = (data) => {
    if (checkBoxes.webshopChecked || checkBoxes.inAppChecked) {
      console.log(data);
      setOverlay(<OverlayOne />);
      onOpen();
      return;
    }
    return alert(
      'Please select whether you are interested in a webshop, in placement on bfd.lt, or both'
    );
  };

  return (
    <div className="restaurant-signup__container">
      <div className="signup__wrapper">
        <div className="signup__message">
          <h2 className="signup__header">
            Fill out the form and we will get back to you within 48 hours.
          </h2>
          <h3 className="restaurant-signup__text-big">
            Since many restaurants are visiting our site to sign up for free, we
            will do our best to get back to you within 48 hours. <br />
            Until then, please make sure that your menu card is ready to go
            online.
          </h3>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="signup__header">
            Sign up and get your own webshop or join us at bfd.lt
          </div>
          <Stack spacing={3} direction="column">
            <Checkbox
              mt="20px"
              {...register('webshop')}
              colorScheme="teal"
              size="lg"
              onChange={(e) => {
                toggleCheckedState(e.target.name);
              }}
            >
              Get your own webshop
            </Checkbox>
            <Checkbox
              {...register('inApp')}
              colorScheme="teal"
              size="lg"
              onChange={(e) => {
                toggleCheckedState(e.target.name);
              }}
            >
              Get your restaurant on bfd.lt
            </Checkbox>
          </Stack>
          <div className="form__label">* Select at least 1 option.</div>
          <FormControl mt="20px" isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name of the restaurant</FormLabel>
            <Input
              id="name"
              {...register('name', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="20px" isInvalid={errors.owner}>
            <FormLabel htmlFor="owner">Full name of the owner</FormLabel>
            <Input
              id="owner"
              {...register('owner', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.owner && errors.owner.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="20px" isInvalid={errors.phone}>
            <FormLabel htmlFor="phone">Phone number of the owner</FormLabel>
            <Input
              id="phone"
              {...register('phone', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="20px" isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email address of the owner</FormLabel>
            <Input
              id="email"
              {...register('email', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt={8} colorScheme="teal" type="submit">
            Submit information
          </Button>
        </form>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Application Submitted</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>We will get back to you within 24 hours!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default SubmitForm;
