import React from 'react';
import { useState } from 'react';
import { Box, Text, Card, Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const ExtendedComponent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card p="4" mb="4">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        onClick={toggleOpen}
      >
        <Text as="b">{title}</Text>
        <Icon
          as={ChevronDownIcon}
          color="gray.500"
          w={6}
          h={6}
          transform={isOpen ? 'rotate(180deg)' : ''}
        />
      </Box>
      {isOpen && <Box mt="4">{children}</Box>}
    </Card>
  );
};

export default ExtendedComponent;
