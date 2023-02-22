import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './index.css';

function Footer() {
  return (
    <Box as="footer" bg="lightcoral" marginTop="20px">
      <Heading textAlign="center">All rights reserved.</Heading>
    </Box>
  );
}

export default Footer;
