import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Center,
  Flex,
  Stack,
  Heading,
  Image,
  Divider,
} from '@chakra-ui/react';

function OrderParametersModal({
  isOpen,
  onClose,
  header,
  options,
  setStateFn,
}) {
  const handleClick = (e) => {
    setStateFn(e.target.innerText);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>
          <Stack>
            {options?.map((address) => {
              return (
                <Button
                  variant="outline"
                  key={address}
                  onClick={(e) => handleClick(e)}
                >
                  {address}
                </Button>
              );
            })}
          </Stack>

          <Divider />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default OrderParametersModal;
