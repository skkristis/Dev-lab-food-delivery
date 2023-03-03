import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Input,
  Divider,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrimaryAddress } from '../../../../store/reducers/customerReducer';

function DeliverToModal({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const customerAddressBook = useSelector(
    (state) => state.customer.addressBook
  );
  const dispatchPrimaryAddress = (addressId) => {
    dispatch(setPrimaryAddress(addressId));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change order details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            {customerAddressBook?.map((address) => {
              const addressFormated = `${address.street} ${address.building}-${address.apartment}, ${address.city}`;
              const border = address.primary
                ? '2px solid #4299e1'
                : '2px solid lightgray';

              return (
                <Button
                  onClick={() => dispatchPrimaryAddress(address.id)}
                  key={addressFormated}
                  border={border}
                  variant="unstyled"
                >
                  {addressFormated}
                </Button>
              );
            })}
            <Divider />
            <Input placeholder="Add another address..." />
          </Stack>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeliverToModal;
