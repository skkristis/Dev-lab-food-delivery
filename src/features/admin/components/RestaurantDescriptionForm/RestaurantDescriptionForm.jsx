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
    hours: restaurant.workingHours,
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

        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.hours}
        >
          <FormLabel htmlFor="restaurant-hours">Working hours</FormLabel>
          <Input
            id="restaurant-hours"
            placeholder="Working hours"
            {...register('hours')}
          />
          <FormErrorMessage>
            {errors.hours && errors.hours.message}
          </FormErrorMessage>
        </FormControl>

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
            {errors.driverLicense && errors.driverLicense.message}
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
