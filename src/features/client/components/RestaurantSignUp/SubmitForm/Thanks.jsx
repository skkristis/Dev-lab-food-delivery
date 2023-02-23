import React from 'react';
import { Button } from '@chakra-ui/react';

function Thanks({ hideThanks }) {
  return (
    <div className="form__thanks">
      <h2 className="restaurant-signup__title">
        Thank you! We will get back to you as soon as we review your application
      </h2>
      <Button
        position="absolute"
        bottom="70px"
        left="50%"
        transform="translateX(-50%)"
        colorScheme="teal"
        size="lg"
        onClick={() => hideThanks()}
      >
        Back
      </Button>
    </div>
  );
}

export default Thanks;
