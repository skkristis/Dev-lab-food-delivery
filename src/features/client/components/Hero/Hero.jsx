import { Box, Heading, Image, Input } from "@chakra-ui/react";

import imageUrl from "../../../../assets/client-landing-hero.jpg";

function Hero() {
  return (
    <Box position="relative" className="container" marginTop="50px">
      <Image src={imageUrl} zIndex="-1" />
      <Box
        position="absolute"
        top="50%"
        left="20%"
        width="50%"
        backdropFilter="auto"
        backdropBlur="2px"
      >
        <Heading color="white">Let's find some food!</Heading>
        <Input color="white" bg="lightgray" placeholder="Search" />
      </Box>
    </Box>
  );
}

export default Hero;
