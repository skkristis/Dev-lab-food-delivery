import React, { useState } from 'react';

import { Button, Spinner, Td, Tr, useDisclosure } from '@chakra-ui/react';

import './index.scss';
import CourierSelectionModal from '../CourierSelectionModal';

import restaurants from '../../mocks/restaurants';

function CouriersOrderCard({ order }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selected, setSelected] = useState(false);

  const restaurant = restaurants[0];

  const handleClickAssign = () => {
    onOpen();
    setSelected(true);
  };
  const handleClose = () => {
    onClose();
    setSelected(false);
  };

  return (
    <>
      <Tr key={order.id}>
        <Td>{order.id}</Td>
        <Td>{restaurant.name} </Td>
        <Td>{order.customer.name} </Td>
        <Td>{order.status}</Td>
        <Td>
          <Button onClick={handleClickAssign}>
            {selected ? <Spinner /> : 'Select'}
          </Button>
        </Td>
      </Tr>

      <CourierSelectionModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
}

export default CouriersOrderCard;
