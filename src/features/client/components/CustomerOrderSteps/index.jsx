import React from 'react';
import { useSelector } from 'react-redux';
import { Step, Steps, useSteps } from 'chakra-ui-steps';

import { Flex, Button, Alert, AlertIcon, Text } from '@chakra-ui/react';

function CustomerOrderSteps() {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const statusMessage = (status) => {
    switch (status) {
      case 'Accepted':
        return 'Your order has been accepted! Nr. 12983123789';
      case 'Preparing':
        return 'Your order is being prepared.';
      case 'Ready':
        return 'Your order is ready. A courier will pick it up soon.';
      case 'Delivering':
        return 'Your order is out for delivery.';
      case 'Completed':
        return 'Order has been delivered. Enjoy your meal!';
    }
  };

  const content = (status) => (
    <Alert status="info" variant="subtle" className="order-status__alert">
      <AlertIcon boxSize="50px" mr={0} />
      <Text className="order-status__title">{statusMessage(status)}</Text>

      <Text className="order-status__message">
        Thanks for choosing our service!
      </Text>
    </Alert>
  );

  const steps = [
    { label: 'Accepted' },
    { label: 'Preparing' },
    { label: 'Ready' },
    { label: 'Delivering' },
    { label: 'Completed' },
  ];

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep} colorScheme="teal" mb="20px">
        {steps.map(({ label }) => (
          <Step label={label} key={label}>
            {content(label)}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="center">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

export default CustomerOrderSteps;
