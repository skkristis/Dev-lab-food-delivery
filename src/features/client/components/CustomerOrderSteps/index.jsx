import React from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Button, Alert, Text, Box } from '@chakra-ui/react';
import { GiCook } from 'react-icons/gi';
import { TiTick } from 'react-icons/ti';
import { IoFastFoodSharp, IoStar } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';

function CustomerOrderSteps() {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const steps = [
    {
      label: 'Accepted',
      message: 'Your order has been accepted! Nr. 12983123789.',
      comment: 'We will immediately start preparing it!',
      icon: <TiTick style={{ width: '100%', height: '100%' }} />,
    },
    {
      label: 'Preparing',
      message: 'Your order is being prepared.',
      icon: <GiCook style={{ width: '100%', height: '100%' }} />,
      comment: 'We will immediately start preparing it!',
    },
    {
      label: 'Ready',
      message: 'Your order is ready. A courier will pick it up soon.',
      icon: <IoFastFoodSharp style={{ width: '100%', height: '100%' }} />,
    },
    {
      label: 'Delivering',
      message: 'Your order is out for delivery.',
      icon: <TbTruckDelivery style={{ width: '100%', height: '100%' }} />,
    },
    {
      label: 'Completed',
      message: 'Order has been delivered. Enjoy your meal!',
      icon: <IoStar style={{ width: '100%', height: '100%' }} />,
    },
  ];

  const content = (message, icon) => (
    <Alert status="info" variant="subtle" className="order-status__alert">
      <Box width="60px" height="60px">
        {icon}
      </Box>
      <Text className="order-status__title">{message}</Text>
    </Alert>
  );

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep} colorScheme="blue" mb="20px">
        {steps.map(({ label, message, icon }) => (
          <Step label={label} key={label}>
            {content(message, icon)}
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
