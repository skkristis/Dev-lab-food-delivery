import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  update,
} from '../../../../store/reducers/restaurantsManagementReducer';
import axios from '../../../../services/axios';

import { merchantStatuses } from '../../../../constants';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Select,
  Button,
  Text,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { weekdays } from '../../../../constants';

import './RestaurantDescriptionForm.scss';

function RestaurantDescriptionForm() {
  const merchantId = '98a38bca-c1d0-4c9f-8c35-9574579b3937';

  const merchant = useSelector((state) =>
    state.restaurantsManagement.list.find((item) => item.id === merchantId)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!merchant) {
      const getMerchant = async () =>
        await axios.get(`/api/merchants/${merchantId}`);

      getMerchant().then((response) => dispatch(add(response.data.data)));
    }
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const decodeInputTime = (ms) => {
    const hours = parseInt(ms / 3600);
    const minutes = (ms % 3600) / 60;
    return `${hours > 9 ? hours : '0' + hours}:${
      minutes > 9 ? minutes : '0' + minutes
    }`;
  };

  const toast = useToast();
  useEffect(() => {
    if (merchant) {
      const merchantData = {
        name: merchant.name,
        name_tag: merchant.name_tag,
        bio: merchant.bio,
        status: merchant.status,
        type: merchant.type,
        description: merchant.description,
        address: merchant.address,
      };

      weekdays.forEach((day) => {
        merchantData[`schedule.${day}.start`] = decodeInputTime(
          merchant.schedule?.[day]?.start
        );
        merchantData[`schedule.${day}.end`] = decodeInputTime(
          merchant.schedule?.[day]?.end
        );
      });

      reset(merchantData);
    }
  }, [merchant]);

  const onSubmit = async (data) => {
    data.media = [];

    weekdays.forEach((day) => {
      const startValue = data.schedule[day].start;
      const endValue = data.schedule[day].end;
      const startSeconds = startValue
        ? parseInt(startValue.split(':')[0], 10) * 3600 +
          parseInt(startValue.split(':')[1], 10) * 60
        : '';
      const endSeconds = endValue
        ? parseInt(endValue.split(':')[0], 10) * 3600 +
          parseInt(endValue.split(':')[1], 10) * 60
        : '';
      data.schedule[day] = { start: startSeconds, end: endSeconds };
    });

    dispatch(update({ data, merchant: merchantId }));
    const response = await axios.put(`/api/merchants/${merchantId}`, data);

    toast({
      title: response.status === 200 ? 'Info updated' : 'Error on update',
      status: response.status === 200 ? 'success' : 'error',
      duration: 6000,
      isClosable: true,
    });
  };

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
          isInvalid={errors.name_tag}
        >
          <FormLabel htmlFor="restaurant-name-tag">Name tag</FormLabel>
          <Input
            id="restaurant-name-tag"
            placeholder="Name tag"
            {...register('name_tag')}
          />
          <FormErrorMessage>
            {errors.name_tag && errors.name_tag.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.bio}
        >
          <FormLabel htmlFor="restaurant-bio">Restaurant bio</FormLabel>
          <Textarea
            id="restaurant-bio"
            placeholder="Restaurant bio"
            {...register('bio')}
          />
          <FormErrorMessage>
            {errors.bio && errors.bio.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl className="restaurant-dataform__control" isDisabled>
          <FormLabel htmlFor="restaurant-status">Restaurant status</FormLabel>
          <Select id="restaurant-status" {...register('status')}>
            {merchantStatuses.map((status) => (
              <option value={status} key={status}>
                {status}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl className="restaurant-dataform__control" isDisabled>
          <FormLabel htmlFor="restaurant-type">Restaurant type</FormLabel>
          <Select id="restaurant-type" {...register('type')}>
            <option value="restaurant">restaurant</option>
            <option value="shop">shop</option>
          </Select>
        </FormControl>

        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.description}
        >
          <FormLabel htmlFor="restaurant-description">
            Restaurant description
          </FormLabel>
          <Textarea
            id="restaurant-description"
            placeholder="Restaurant description"
            {...register('description')}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
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

        <FormControl className="restaurant-dataform__control">
          <FormLabel htmlFor="restaurant-schedule">
            Restaurant schedule
          </FormLabel>
          {weekdays.map((day) => (
            <HStack key={day} alignItems="center" gap={3}>
              <Text w={{ base: '130px', md: '100px' }}>{`${day
                .charAt(0)
                .toUpperCase()}${day.slice(1)}:`}</Text>
              <Input
                type="time"
                isInvalid={errors.schedule?.[day]?.start}
                {...register(`schedule.${day}.start`, {
                  required: 'This field is required.',
                })}
              />
              <Text>to</Text>
              <Input
                type="time"
                isInvalid={errors.schedule?.[day]?.end}
                {...register(`schedule.${day}.end`, {
                  required: 'This field is required.',
                })}
              />
            </HStack>
          ))}
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
