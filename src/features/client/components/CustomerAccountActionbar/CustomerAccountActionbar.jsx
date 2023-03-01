import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';

import './CustomerAccountActionbar.scss';

function CustomerAccountActionbar({ customer }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const navigate = useNavigate();

  const handleLogout = async () => {
    // const response = await fetch('http://70.34.250.230/auth/logout', {
    //   method: 'POST',
    //   body: {},
    // });
    // if (response.status === 204) {
    //   navigate('/');
    // }
  };

  const handleDelete = () => {
    onClose();
  };

  return (
    <div className="customer-dataform__actionbar">
      <Button size="lg" colorScheme="red" onClick={onOpen}>
        Delete Account
      </Button>

      <Button
        variant="outline"
        size="lg"
        colorScheme="red"
        onClick={handleLogout}
      >
        Log Out
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default CustomerAccountActionbar;
