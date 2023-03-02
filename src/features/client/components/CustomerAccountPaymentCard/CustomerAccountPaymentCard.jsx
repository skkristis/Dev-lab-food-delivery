import React from 'react';

import { Icon, Button, Tag, Radio, Tooltip } from '@chakra-ui/react';
import { BiCreditCard } from 'react-icons/all.js';

import './CustomerAccountPaymentCard.scss';

function CustomerAccountPaymentCard({ card, setActiveCard, setShowForm }) {
  const handleEdit = (card) => {
    setActiveCard(card);
    setShowForm(true);
  };

  return (
    <div className="card-item">
      <Tooltip
        display={{ base: 'none', md: 'block' }}
        label="Set as primary"
        shouldWrapChildren
        hasArrow
        placement="bottom"
        bg="green.500"
      >
        <Radio
          className="card-item__radio"
          size="lg"
          colorScheme="green"
          value={card.id}
        ></Radio>
      </Tooltip>

      <div className="card-item__icon">
        <Icon as={BiCreditCard} boxSize={5} color="white" />
      </div>
      <div className="card-item__value">
        <p>
          Card <span>**** {card.number.slice(-4)}</span>
        </p>
        {card.primary && (
          <Tag
            className="card-item__tag"
            size="md"
            variant="solid"
            colorScheme="green"
          >
            primary
          </Tag>
        )}
      </div>
      <Button
        colorScheme="blue"
        className="card-item__button"
        onClick={() => handleEdit(card)}
      >
        Edit
      </Button>
    </div>
  );
}

export default CustomerAccountPaymentCard;
