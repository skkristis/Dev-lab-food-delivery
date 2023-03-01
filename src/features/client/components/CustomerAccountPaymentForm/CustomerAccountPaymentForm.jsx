import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useSelector, useDispatch } from 'react-redux';
import { addCard, editCard } from '../../../../store/reducers/customerReducer';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';

import './CustomerAccountPaymentForm.scss';

function CustomerAccountPaymentForm({ card, setActiveCard, setShowForm }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const dispatch = useDispatch();
  const dispatchAdd = (card) => dispatch(addCard(card));
  const dispatchEdit = (card) => dispatch(editCard(card));

  const cardIds = useSelector((state) =>
    state.customer.payment.cards.map((card) => card.id)
  );

  const onSubmit = (data) => {
    const newCard = { ...data };

    if (card) {
      newCard.id = card.id;
      dispatchEdit(newCard);
    }

    if (!card) {
      let attempts = 10;
      while (attempts > 0) {
        let newId = Math.floor(Math.random() * 900000) + 100000;
        if (!cardIds.find((item) => item.id === newId)) {
          newCard.id = newId;
          break;
        }
        attempts--;
      }

      if (newCard.id) {
        if (!cardIds.length) {
          newCard.primary = true;
        }
        dispatchAdd(newCard);
      }
    }

    setActiveCard(null);
    setShowForm(false);
  };

  return (
    <div className="card-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="card-form__control" isInvalid={errors.number}>
          <FormLabel htmlFor="number">Card number</FormLabel>
          <Input
            id="number"
            placeholder="Card number"
            defaultValue={card?.number}
            as={InputMask}
            mask="9999 9999 9999 9999"
            maskChar={null}
            {...register('number', {
              required: 'This field is required.',
              minLength: { value: 19, message: 'Incorrect format.' },
            })}
          />
          <FormErrorMessage>
            {errors.number && errors.number.message}
          </FormErrorMessage>
        </FormControl>

        <HStack spacing="20px" alignItems="flex-start">
          <FormControl className="card-form__control" isInvalid={errors.valid}>
            <FormLabel htmlFor="valid">Valid</FormLabel>
            <Input
              id="valid"
              placeholder="Valid thru"
              defaultValue={card?.valid}
              as={InputMask}
              mask="99/99"
              maskChar={null}
              {...register('valid', {
                required: 'This field is required.',
                minLength: { value: 5, message: 'Incorrect format.' },
              })}
            />
            <FormErrorMessage>
              {errors.valid && errors.valid.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl className="card-form__control" isInvalid={errors.cvc}>
            <FormLabel htmlFor="cvc">CVC</FormLabel>
            <Input
              id="cvc"
              placeholder="CVC"
              defaultValue={card?.cvc}
              as={InputMask}
              mask="999"
              maskChar={null}
              {...register('cvc', {
                required: 'This field is required.',
                minLength: { value: 3, message: 'Incorrect format.' },
              })}
            />
            <FormErrorMessage>
              {errors.cvc && errors.cvc.message}
            </FormErrorMessage>
          </FormControl>
        </HStack>

        <Button
          type="submit"
          className="card-form__submit"
          colorScheme="blue"
          size="lg"
          isLoading={isSubmitting}
        >
          {card ? 'Update' : 'Add'}
        </Button>
      </form>
    </div>
  );
}

export default CustomerAccountPaymentForm;
