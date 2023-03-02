import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function UserMenu({ onLoginModalOpen, onSignupModalOpen }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        User
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onLoginModalOpen} variant="ghost">
          Log In
        </MenuItem>
        <MenuItem onClick={onSignupModalOpen}>Sign up</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
