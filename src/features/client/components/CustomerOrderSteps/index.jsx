import React from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Button, Alert, Text, Box } from '@chakra-ui/react';
import { steps } from '../../mocks/orderStepsMock';

function CustomerOrderSteps() {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

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
      <Steps
        activeStep={activeStep}
        state="loading"
        colorScheme="blue"
        mb="20px"
      >
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
