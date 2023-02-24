import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { FormControl, Checkbox, Button } from '@chakra-ui/react';

import './RestOrder.scss';

function RestOrder({ order, ordersSort }) {
  const allDishes = useSelector((state) => state.dishes.list);

  const orderDishes = order.dishes.map((dish) => {
    const name = allDishes.find((item) => item.id === dish.id).name;
    return { ...dish, name };
  });

  console.log(ordersSort);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCheckboxClick = () => {};

  function onSubmit() {}

  return (
    <div className="rest-order">
      <div className="rest-order__info">
        <p className="rest-order__title">Order #{order.id}</p>
        <p className="rest-order__status">
          Current status: <span>{order.status}</span>
        </p>
        <p className="rest-order__payment">
          Payment: {order.payment.total} EUR by {order.payment.method}
        </p>
      </div>

      <div className="rest-order__dishes dishes-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {orderDishes.map((dish) => (
            <FormControl
              className="dishes-form__control"
              isInvalid={errors['dish-' + dish.id]}
              isDisabled={ordersSort !== 'pending'}
              key={dish.id}
            >
              <Checkbox
                {...register('dish-' + dish.id)}
                size="lg"
                colorScheme="green"
                defaultChecked={ordersSort !== 'pending'}
                onClick={handleCheckboxClick}
              >
                {dish.name} <span>({dish.amount} pcs.)</span>
              </Checkbox>
            </FormControl>
          ))}

          {ordersSort !== 'fulfilled' && (
            <Button
              type="submit"
              className="dishes-form__submit"
              colorScheme="green"
              size="lg"
              isLoading={isSubmitting}
              isDisabled={ordersSort === 'pending'}
            >
              {ordersSort === 'pending' ? 'Ready for delivery' : 'Finish order'}
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default RestOrder;
