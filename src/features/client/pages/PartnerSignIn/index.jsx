import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Radio,
  RadioGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PartnerSignIn() {
  const [partnerType, setPartnerType] = useState('restaurant');
  const navigate = useNavigate();
  const openDashboard = () => {
    return partnerType === 'restaurant'
      ? navigate('/admin/restaurants')
      : navigate('/admin/couriers');
  };

  return (
    <Flex justify={'center'} bg="white">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <RadioGroup onChange={setPartnerType} value={partnerType}>
              <FormLabel>Please select the type of your account</FormLabel>
              <Stack direction="column">
                <Radio value="restaurant">Restaurant</Radio>
                <Radio value="courier">Courier</Radio>
              </Stack>
            </RadioGroup>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={openDashboard}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default PartnerSignIn;
