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
  useToast,
} from '@chakra-ui/react';

import SwedbankUrl from '../../../../assets/swedbank-icon.png';
import PayseraUrl from '../../../../assets/paysera-icon.png';
import { useNavigate } from 'react-router-dom';

function PaymentModal({
  paymentIsOpen,
  paymentOnClose,
  payMethod,
  orderTotal,
}) {
  const toast = useToast();
  const navigate = useNavigate();

  const cancelPayment = () => {
    paymentOnClose();
    toast({
      title: `Something went wrong!`,
      status: 'error',
      isClosable: true,
    });
  };

  const payMethodUrl = payMethod === 'Swedbank' ? SwedbankUrl : PayseraUrl;
  const payMethodWidth = payMethod === 'Swedbank' ? '30px' : '100px';

  return (
    <Modal isOpen={paymentIsOpen} onClose={paymentOnClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader marginTop="30vh" textAlign="center">
          <Flex justifyContent="center" gap="10px">
            <Image src={payMethodUrl} width={payMethodWidth} />
            <Text>Payment window</Text>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Center>
            <Flex gap="20px">
              <Stack
                padding="10px 20px"
                border="1px solid lightgray"
                rounded="md"
              >
                <Heading fontSize="16px">Order nr.: 1856715813</Heading>
                <Text>Total: {orderTotal} EUR</Text>
                <Heading fontSize="16px">Merchant:</Heading>
                <Text>Name: BestFoodDelivery, UAB</Text>
              </Stack>
              <Stack>
                <Button onClick={() => navigate('/order-status')}>
                  Accept
                </Button>
                <Button onClick={cancelPayment}>Decline</Button>
              </Stack>
            </Flex>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PaymentModal;
