import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  addItem,
  updateItem,
} from '../../../../store/reducers/restaurantsManagementReducer';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  Textarea,
  Select,
  Button,
} from '@chakra-ui/react';

import './RestaurantDishForm.scss';

function RestaurantDishForm({
  dish = null,
  allDishes,
  setActiveDish,
  formState,
  setFormState,
}) {
  const merchantId = '98a38bca-c1d0-4c9f-8c35-9574579b3937';

  const defaultFormValues = dish
    ? {
        name: dish.name,
        status: dish.status,
        price: dish.price,
        bio: dish.bio,
        ingredients: dish.ingredients?.join('\n'),
        thumbnail: dish.thumbnail,
      }
    : {};

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultFormValues,
  });

  const dispatch = useDispatch();
  const dispatchAdd = (dish) => dispatch(addItem(dish));
  const dispatchUpdate = (dish) => dispatch(updateItem(dish));

  const onSubmit = (data) => {
    const newDish = { ...data, price: Number(data.price).toFixed(2) };
    newDish.ingredients = data.ingredients
      .split('\n')
      .filter((line) => line.length);

    if (formState === 'edit') {
      newDish.id = dish.id;
      newDish.merchant_id = dish.merchant_id;
      dispatchUpdate(newDish);
      setActiveDish(newDish);
      setFormState('idle');
    }

    if (formState === 'add') {
      let attempts = 10;
      while (attempts > 0) {
        let newId = Math.floor(Math.random() * 900000) + 100000;
        if (!allDishes.find((item) => item.id === newId)) {
          newDish.id = newId.toString();
          break;
        }
        attempts--;
      }

      if (newDish.id) {
        newDish.merchant_id = merchantId;
        dispatchAdd(newDish);
        setActiveDish(newDish);
        setFormState('idle');
      }
    }
  };

  return (
    <div className="restaurant-dishform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.name}
        >
          <FormLabel htmlFor="dish-name">Dish name</FormLabel>
          <Input
            id="dish-name"
            placeholder="Dish name"
            {...register('name', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.price}
        >
          <FormLabel htmlFor="dish-price">Price (EUR)</FormLabel>
          <NumberInput step={0.01} precision={2}>
            <NumberInputField
              id="dish-price"
              placeholder="Dish price"
              {...register('price', {
                required: 'This field is required.',
                min: {
                  value: 0,
                  message: 'Min value is 0.',
                },
                max: {
                  value: 100000,
                  message: 'Max value is 100000.',
                },
              })}
            />
          </NumberInput>

          <FormErrorMessage>
            {errors.price && errors.price.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.status}
        >
          <FormLabel htmlFor="dish-status">Current status</FormLabel>
          <Select
            id="dish-status"
            {...register('status', {
              required: 'This field is required.',
            })}
          >
            <option value="enabled">enabled</option>
            <option value="disabled">disabled</option>
          </Select>
          <FormErrorMessage>
            {errors.status && errors.status.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.bio}
        >
          <FormLabel htmlFor="dish-description">Dish description</FormLabel>
          <Textarea
            id="dish-description"
            placeholder="Some words here..."
            {...register('bio', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.bio && errors.bio.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.ingredients}
        >
          <FormLabel htmlFor="dish-ingredients">Dish ingredients</FormLabel>
          <Textarea
            id="dish-ingredients"
            placeholder="Each ingredient from new line..."
            {...register('ingredients')}
          />
          <FormErrorMessage>
            {errors.ingredients && errors.ingredients.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.thumbnail}
        >
          <FormLabel htmlFor="dish-image">Image link</FormLabel>
          <Input
            id="dish-image"
            placeholder="Dish image"
            {...register('thumbnail')}
          />
          <FormErrorMessage>
            {errors.thumbnail && errors.thumbnail.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          className="restaurant-dishform__submit"
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

export default RestaurantDishForm;
