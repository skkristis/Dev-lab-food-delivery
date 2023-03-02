import React from 'react';
import { useForm } from 'react-hook-form';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Checkbox,
  CheckboxGroup,
  Button,
} from '@chakra-ui/react';

import './RestaurantDescriptionForm.scss';

import restaurants from '../../mocks/restaurants';

function RestaurantDescriptionForm() {
  const restaurant = restaurants[0];

  const defaultFormValues = {
    name: restaurant.name,
    address: restaurant.address,
    hoursFrom: restaurant.workingHours.from,
    hoursTill: restaurant.workingHours.till,
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultFormValues,
  });

  function onSubmit() {}

  return (
    <div className="restaurant-dataform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.name}
        >
          <FormLabel htmlFor="restaurant-name">Restaurant name</FormLabel>
          <Input
            id="restaurant-name"
            placeholder="Restaurant name"
            {...register('name', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.address}
        >
          <FormLabel htmlFor="restaurant-address">Restaurant address</FormLabel>
          <Input
            id="restaurant-address"
            placeholder="Restaurant address"
            {...register('address', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.address && errors.address.message}
          </FormErrorMessage>
        </FormControl>

        <div className="restaurant-dataform__row">
          <FormControl
            className="restaurant-dataform__control"
            isInvalid={errors.hoursFrom}
          >
            <FormLabel htmlFor="restaurant-hours-from">
              Working hours (from)
            </FormLabel>
            <Input
              id="restaurant-hours-from"
              type="time"
              {...register('hoursFrom')}
            />
            <FormErrorMessage>
              {errors.hoursFrom && errors.hoursFrom.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            className="restaurant-dataform__control"
            isInvalid={errors.hoursTill}
          >
            <FormLabel htmlFor="restaurant-hours-till">
              Working hours (till)
            </FormLabel>
            <Input
              id="restaurant-hours-till"
              type="time"
              {...register('hoursTill')}
            />
            <FormErrorMessage>
              {errors.hoursTill && errors.hoursTill.message}
            </FormErrorMessage>
          </FormControl>
        </div>

        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.paymentMethods}
        >
          <FormLabel>Payment methods</FormLabel>

          <CheckboxGroup
            colorScheme="green"
            defaultValue={Object.entries(restaurant.paymentMethods)
              .filter(([, isActive]) => isActive)
              .map(([method]) => method)}
          >
            <Stack spacing={2} direction={['column', 'row']}>
              {Object.keys(restaurant.paymentMethods).map((method) => (
                <Checkbox
                  {...register('payment')}
                  key={method}
                  value={method}
                  size="lg"
                  colorScheme="green"
                >
                  by {method}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>

          <FormErrorMessage>
            {errors.paymentMethods && errors.paymentMethods.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          className="restaurant-dataform__submit"
          colorScheme="green"
          size="lg"
          isLoading={isSubmitting}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default RestaurantDescriptionForm;
