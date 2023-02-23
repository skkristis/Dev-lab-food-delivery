import React from 'react';
import './index.css';
import { Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';

function CourierRegisterForm() {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text>
          <Link to={'/courier'}>For couriers</Link> &#x3e; Apply Now
        </Text>
        <Text as="b" fontSize="5xl">
          Become a courier!
        </Text>
        <Text>Sign up and apply in a few clicks.</Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        m={10}
        backgroundColor="#edf2f7"
        rounded="md"
      >
        <Box m={5} textAlign="center">
          <Text as="b" fontSize="3xl">
            Let&apos;s get started!
          </Text>
          <Text>We&apos;ll ask a few basic things about you</Text>
        </Box>
        <UserForm />
      </Box>
    </>
  );
}

export default CourierRegisterForm;
