import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

import "./CouriersForm.scss";

const user = {
  firstName: "John",
  lastName: "Doe",
  driverLicense: "12345qwe",
};

function CouriersForm() {
  //const orders = useSelector((state) => state.orders.list);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...user },
  });

  function onSubmit(values) {}

  return (
    <div className="couriers-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className="couriers-form__control"
          isInvalid={errors.firstName}
        >
          <FormLabel htmlFor="courier-name">First name</FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            {...register("firstName", {
              required: "This field is required.",
            })}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="couriers-form__control"
          isInvalid={errors.lastName}
        >
          <FormLabel htmlFor="last-name">Last name</FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            {...register("lastName", {
              required: "This field is required.",
            })}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="couriers-form__control"
          isInvalid={errors.driverLicense}
        >
          <FormLabel htmlFor="driver-license">Driver license</FormLabel>
          <Input
            id="driver-license"
            placeholder="Driver license"
            {...register("driverLicense", {})}
          />
          <FormErrorMessage>
            {errors.driverLicense && errors.driverLicense.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          className="couriers-form__submit"
          colorScheme="green"
          size="lg"
          isLoading={isSubmitting}
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default CouriersForm;
