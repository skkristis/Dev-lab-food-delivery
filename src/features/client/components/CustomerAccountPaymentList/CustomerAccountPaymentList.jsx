import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPrimaryCard,
  setPreferPayment,
} from '../../../../store/reducers/customerReducer';

import { Button, RadioGroup, Switch } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CustomerAccountPaymentCard from '../CustomerAccountPaymentCard/CustomerAccountPaymentCard';

import './CustomerAccountPaymentList.scss';

function CustomerAccountPaymentList({ cardList, setActiveCard, setShowForm }) {
  const primaryCard = useSelector((state) =>
    state.customer.payment.cards.find((card) => card.primary)
  );

  const dispatch = useDispatch();
  const dispatchPrimaryCard = (id) => dispatch(setPrimaryCard(id));
  const dispatchPreferPayment = (method) => dispatch(setPreferPayment(method));

  const handleSetPrimary = (value) => {
    if (primaryCard?.id !== value) {
      dispatchPrimaryCard(value);
    }
  };

  const paymentMethod = useSelector((state) => state.customer.payment.prefer);

  const handleChangePrefer = () => {
    const method = paymentMethod === 'cash' ? 'card' : 'cash';
    dispatchPreferPayment(method);
  };

  return (
    <>
      <div className="customer-prefer">
        <p className="customer-prefer__title">Prefered payment method</p>
        <div className="customer-prefer__body">
          <p
            className={`customer-prefer__option ${
              paymentMethod === 'card' && 'is-active'
            }`}
          >
            By card
          </p>
          <Switch
            className="customer-prefer__switch"
            colorScheme="blue"
            size="lg"
            isChecked={paymentMethod === 'cash'}
            onChange={handleChangePrefer}
          />
          <p
            className={`customer-prefer__option ${
              paymentMethod === 'cash' && 'is-active'
            }`}
          >
            By cash
          </p>
        </div>
      </div>

      <div className="customer-cardlist">
        <div className="customer-cardlist__items cardlist">
          {cardList.length > 0 ? (
            <RadioGroup
              onChange={(value) => handleSetPrimary(Number(value))}
              value={primaryCard?.id}
            >
              {cardList.map((card) => (
                <CustomerAccountPaymentCard
                  key={card.id}
                  card={card}
                  setActiveCard={setActiveCard}
                  setShowForm={setShowForm}
                />
              ))}
            </RadioGroup>
          ) : (
            <p className="cardlist__empty">No cards added yet</p>
          )}
        </div>

        <Button
          className="customer-cardlist__add"
          leftIcon={<AddIcon />}
          colorScheme="blue"
          size="lg"
          onClick={() => setShowForm(true)}
        >
          Add new card
        </Button>
      </div>
    </>
  );
}

export default CustomerAccountPaymentList;
