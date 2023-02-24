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

import './RestDescriptionForm.scss';

import restaurants from '../../mocks/restaurants';

function RestDescriptionForm() {
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
    <div className="rest-dataform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="rest-dataform__control" isInvalid={errors.name}>
          <FormLabel htmlFor="rest-name">Restaurant name</FormLabel>
          <Input
            id="rest-name"
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
          className="rest-dataform__control"
          isInvalid={errors.address}
        >
          <FormLabel htmlFor="rest-address">Restaurant address</FormLabel>
          <Input
            id="rest-address"
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
          className="rest-dataform__control"
          isInvalid={errors.hours}
        >
          <FormLabel htmlFor="rest-hours">Working hours</FormLabel>
          <Input
            id="rest-hours"
            placeholder="Working hours"
            {...register('hours')}
          />
          <FormErrorMessage>
            {errors.hours && errors.hours.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="rest-dataform__control"
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
          className="rest-dataform__submit"
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

export default RestDescriptionForm;
