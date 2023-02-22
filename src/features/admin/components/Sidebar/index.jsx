import {
  Box,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import NavItem from '../NavItem/index.jsx';
import { getAdminRoutes } from '../../../../router/index.jsx';

export default function Sidebar({ onClose, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {getAdminRoutes().map((link) => (
        <NavItem
          key={link.navItemName}
          icon={link.navItemIcon}
          to={link.index ? '' : link.path}
          isIndex={link.index}
        >
          {link.navItemName}
        </NavItem>
      ))}
    </Box>
  );
}
