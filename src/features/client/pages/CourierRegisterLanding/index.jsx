import React from 'react';
import './index.css';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  ChakraProvider,
  Heading,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import ExtendedComponent from './ExtendedComponent';
import { Link } from 'react-router-dom';

function CourierRegisterLanding() {
  return (
    <React.Fragment>
      <ChakraProvider>
        <Box>
          <Flex flexDirection="column" alignItems="center">
            <Text as="b" fontSize="5xl">
              Become A Courier!
            </Text>
            <Button width="150px">
              <Link to="/apply-as-courier">Submit A Form</Link>
            </Button>
          </Flex>
        </Box>
        <Box m={10}>
          <Flex flexDirection="column" alignItems="center" textAlign="center">
            <Text as="b" fontSize="4xl">
              Why is it worth becoming a courier?
            </Text>
            <Text width="500px">
              As courier-partners, you can deliver orders to customers from
              local restaurants and shops - in the evening, for a few hours
              during lunch or at any other time you want. It&apos;s easy to join
              - you don&apos;t need any experience!
            </Text>
          </Flex>
        </Box>
        <Flex flexDirection={'row'} gap="10" m={10}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Competitive Earnings</Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Flexible Hours</Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Amazing Support</Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
        <Box m={10}>
          <Flex flexDirection="column" alignItems="center" textAlign="center">
            <Text as="b" fontSize="4xl">
              Get started in 3 easy steps
            </Text>
            <Flex flexDirection="row" m={5}>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width="33%"
              >
                <div className="circle">1</div>
                <Text>Submit your application</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width="33%"
              >
                <div className="circle">2</div>
                <Text>Get approved</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width="33%"
              >
                <div className="circle">3</div>
                <Text>Deliver & Earn</Text>
              </Box>
            </Flex>
            <Button>
              <Link to="/apply-as-courier">Submit A Form</Link>
            </Button>
          </Flex>
        </Box>
        <Box m={10}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <CardBody>
                <Heading as="h1" fontSize="4x1">
                  A few things you&apos;ll need to get started
                </Heading>
                <Text py="2">Check our simple application requirements:</Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>
              </CardBody>
              <CardFooter>
                <Button>
                  <Link to="/apply-as-courier">Submit A Form</Link>
                </Button>
              </CardFooter>
            </Stack>
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '600px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
          </Card>
        </Box>
        <Box m={10}>
          <Flex justifyContent="space-between">
            <Card textAlign="center" alignItems="center" width="300px">
              <CardBody>
                <Text>
                  &quot;As a student, free schedule gives me the opportunity to
                  earn extra income while maintaining the highest level of
                  education.&quot;
                </Text>
              </CardBody>
              <CardFooter>
                <Box>
                  <Text>Name</Text>
                  <Text>City</Text>
                </Box>
              </CardFooter>
            </Card>
            <Card textAlign="center" alignItems="center" width="300px">
              <CardBody>
                <Text>
                  &quot;Freedom of choice is one of my core values. I get the
                  opportunity to be my own boss, to work whenever I want and to
                  manage my income easily. I am really happy with this
                  platform.&quot;
                </Text>
              </CardBody>
              <CardFooter>
                <Box>
                  <Text>Name</Text>
                  <Text>City</Text>
                </Box>
              </CardFooter>
            </Card>
            <Card textAlign="center" alignItems="center" width="300px">
              <CardBody>
                <Text>
                  &quot;Wolt gives me the opportunity to earn extra income in my
                  spare time. It&apos;s also fun to drive around the city, take
                  in the sights and meet people. I have been a Wolt Courier
                  Partner for a year now and I can&apos;t complain about
                  anything.&quot;
                </Text>
              </CardBody>
              <CardFooter>
                <Box>
                  <Text>Name</Text>
                  <Text>City</Text>
                </Box>
              </CardFooter>
            </Card>
          </Flex>
        </Box>
        <Box m={10}>
          <Flex flexDirection="column" alignItems="center">
            <Text as="b" fontSize="4xl">
              Sign up today and you&apos;ll hit the road in no time!
            </Text>
            <Button width="150px" m={5}>
              <Link to="/apply-as-courier">Submit A Form</Link>
            </Button>
          </Flex>
        </Box>
        <Box m={10}>
          <Box textAlign="center">
            <Text as="b" fontSize="4xl">
              Frequently asked questions
            </Text>
          </Box>
          <Box mb={5}>
            <ExtendedComponent
              title={'How long does the application process take?'}
            >
              Typically, it takes less than 30 minutes to fill out the
              application. If you&apos;re new to Wolt, you&apos;ll need to
              create an account, enter in a few basic details, and upload the
              required documents.
            </ExtendedComponent>
            <ExtendedComponent
              title={'Are there other requirements to deliver?'}
            >
              You&apos;ll need to be 18 years or older, and in possession of a
              valid work permit. Additional requirements vary depending on
              whether you want to deliver using a scooter, a car, or a bike.
              You&apos;ll be informed about which documents are required based
              on your selected contract type.
            </ExtendedComponent>
          </Box>
        </Box>
        <Box m={10}>
          <Flex flexDirection="column" textAlign="center">
            <Text as="b" fontSize="4xl">
              About
            </Text>
            <Text>About delivery app text awesome</Text>
          </Flex>
        </Box>
      </ChakraProvider>
    </React.Fragment>
  );
}

export default CourierRegisterLanding;
