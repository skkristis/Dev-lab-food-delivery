import React, { useState, useEffect } from 'react';
import axios from '../../../../../src/services/axios';

import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableContainer,
  Tbody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react';
import RestaurantDescriptionForm from '../RestaurantDescriptionForm/RestaurantDescriptionForm';

import './RestaurantsList.scss';

function RestaurantsList() {
  const [merchants, setMerchants] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('empty');
  const [cursorNext, setCursorNext] = useState(null);

  const [activeMerchant, setActiveMerchant] = useState(null);
  const [formAction, setFormAction] = useState('update');

  const handleViewMerchant = (id = null) => {
    setFormAction(id ? 'update' : 'add');
    setActiveMerchant(id);
    onOpen();
  };

  const loadMerchants = () => {
    setLoadingStatus('loading');
    axios
      .get('/api/merchants', { params: { cursor: cursorNext } })
      .then((response) => {
        setMerchants([...merchants, ...response.data.data]);
        setCursorNext(response.data.meta.next_cursor);
        setLoadingStatus('idle');
      });
  };

  useEffect(() => loadMerchants(), []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function truncate(message, maxLength) {
    return message.length > maxLength
      ? `${message.slice(0, maxLength - 1)}...`
      : message;
  }

  return (
    <div className="merchants-dashboard">
      <div className="merchants-dashboard__nav">
        <Button
          colorScheme="green"
          size="lg"
          onClick={() => handleViewMerchant()}
        >
          Add new
        </Button>
      </div>

      {merchants.length ? (
        <>
          <TableContainer w="full">
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>Merchant</Th>
                  <Th>Type</Th>
                  <Th>Bio</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {merchants.map((merchant) => (
                  <Tr key={merchant.id}>
                    <Td>
                      <strong>{merchant.name}</strong>
                    </Td>
                    <Td>{merchant.type}</Td>
                    <Td>{merchant.bio && truncate(merchant.bio, 30)}</Td>
                    <Td>
                      <Button onClick={() => handleViewMerchant(merchant.id)}>
                        View
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Modal isOpen={isOpen} onClose={onClose} size="3xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign="center">Merchant Info</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <RestaurantDescriptionForm
                  propMerchant={activeMerchant}
                  action={formAction}
                />
              </ModalBody>
            </ModalContent>
          </Modal>

          {loadingStatus !== 'loading' && cursorNext && merchants.length && (
            <Button
              colorScheme="green"
              size="lg"
              mt={10}
              onClick={loadMerchants}
            >
              Load more
            </Button>
          )}
        </>
      ) : (
        loadingStatus === 'idle' && <h3>No merchants added.</h3>
      )}

      {loadingStatus === 'loading' && (
        <Spinner size="xl" alignSelf="center" mt={10} />
      )}
    </div>
  );
}

export default RestaurantsList;
