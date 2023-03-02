import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from '../../../../store/reducers/customerReducer';

import { Button, Tooltip } from '@chakra-ui/react';
import CustomerAccountPaymentList from '../CustomerAccountPaymentList/CustomerAccountPaymentList';
import CustomerAccountPaymentForm from '../CustomerAccountPaymentForm/CustomerAccountPaymentForm';

import './CustomerAccountPayment.scss';

function CustomerAccountPayment({ customer }) {
  const [activeCard, setActiveCard] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const savedCards = useSelector((state) => state.customer.payment.cards);

  const dispatch = useDispatch();
  const dispatchRemove = (card) => dispatch(removeCard(card));

  const handleBackClick = () => {
    setActiveCard(null);
    setShowForm(false);
  };

  const handleRemove = () => {
    dispatchRemove(activeCard.id);
    setActiveCard(null);
    setShowForm(false);
  };

  return (
    <div className="customer-payment">
      <div className="customer-payment__nav">
        {showForm && (
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            onClick={handleBackClick}
          >
            Back
          </Button>
        )}

        {showForm && activeCard && (
          <Tooltip
            label="You can't remove primary card."
            shouldWrapChildren
            hasArrow
            placement="bottom"
            bg="red.500"
            isDisabled={!activeCard.primary}
          >
            <Button
              variant="outline"
              colorScheme="red"
              size="lg"
              isDisabled={activeCard.primary || savedCards.length === 1}
              onClick={handleRemove}
            >
              Remove
            </Button>
          </Tooltip>
        )}
      </div>

      {activeCard || showForm ? (
        <CustomerAccountPaymentForm
          card={activeCard}
          setActiveCard={setActiveCard}
          setShowForm={setShowForm}
        />
      ) : (
        <CustomerAccountPaymentList
          cardList={customer.payment.cards}
          setActiveCard={setActiveCard}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}

export default CustomerAccountPayment;
