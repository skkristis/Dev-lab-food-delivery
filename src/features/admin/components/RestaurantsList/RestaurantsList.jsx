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
} from '@chakra-ui/react';
import RestaurantDescriptionForm from '../RestaurantDescriptionForm/RestaurantDescriptionForm';

import './RestaurantsList.scss';

function RestaurantsList() {
  const [merchants, setMerchants] = useState([]);
  const [nextFetchPage, setNextFetchPage] = useState(true);

  useEffect(() => {
    if (nextFetchPage) {
      axios.get('/api/merchants').then((response) => {
        setMerchants(response.data.data);
        setNextFetchPage(response.data.links.next !== null);
      });
    }
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function truncate(message, maxLength) {
    return message.length > maxLength
      ? `${message.slice(0, maxLength - 1)}...`
      : message;
  }

  return (
    <div className="merchants-dashboard">
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
                    <Td>{merchant.name}</Td>
                    <Td>{merchant.type}</Td>
                    <Td>{truncate(merchant.bio, 30)}</Td>
                    <Td>
                      <Button onClick={onOpen}>View</Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Modal isOpen={isOpen} onClose={onClose} size="3xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Form</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <RestaurantDescriptionForm />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <h3> No merchants added.</h3>
      )}
    </div>
  );
}

export default RestaurantsList;
