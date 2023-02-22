import { Box, Heading, Image, Input } from '@chakra-ui/react';

import imageUrl from '../../../../assets/client-landing-hero.jpg';

function Hero() {
  return (
    <Box position="relative" className="container" marginTop="50px">
      <Image
        display={{ base: 'none', sm: 'block' }}
        src={imageUrl}
        zIndex="-1"
      />
      <Box
        position={{ base: 'block', sm: 'absolute' }}
        top="50%"
        left="12.5%"
        width={{ base: '100%', sm: '75%' }}
        backdropFilter="auto"
        backdropBlur="1.5px"
      >
        <Heading
          color={{ base: 'black', sm: 'white' }}
          marginBlock={{ base: '30px', sm: '0' }}
        >
          Let's find some food!
        </Heading>
        <Input color="white" bg="lightgray" placeholder="Search" />
      </Box>
    </Box>
  );
}

export default Hero;
