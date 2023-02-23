import React from 'react';
import './index.css';
import {
  Box,
  Button,
  Card,
  CardBody,
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
import { Link } from 'react-router-dom';
import CardWithImage from '../../components/CardWithImage';
import CardText from '../../components/CardText';
import AccordionComponent from '../../components/AccordionComponent';

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
        <CardWithImage
          heading="A few things you'll need to get started"
          text="Check our simple application requirements:"
          list={['Item1', 'Item2']}
          buttonText={<Link to="/apply-as-courier">Submit A Form</Link>}
          imageSrc="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          imageAlt="Cafe"
        />
        <Box m={10}>
          <Flex justifyContent="space-between">
            <CardText
              textBody='"As a student, free schedule gives me the opportunity to
        earn extra income while maintaining the highest level of
        education."'
              textFooter="Name"
            />
            <CardText
              textBody='"Freedom of choice is one of my core values. I get the
                  opportunity to be my own boss, to work whenever I want and to
                  manage my income easily. I am really happy with this
                  platform."'
              textFooter="Name"
            />
            <CardText
              textBody="&quot;Wolt gives me the opportunity to earn extra income in my
                  spare time. It's also fun to drive around the city, take
                  in the sights and meet people. I have been a Wolt Courier
                  Partner for a year now and I can't complain about
                  anything.&quot;"
              textFooter="Name"
            />
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
            <AccordionComponent
              title="How long does the application process take?"
              body="Typically, it takes less than 30 minutes to fill out the
              application. If you're new to Wolt, you'll need to
              create an account, enter in a few basic details, and upload the
              required documents."
            />
            <AccordionComponent
              title="Are there other requirements to deliver?"
              body="          You'll need to be 18 years or older, and in possession of a
              valid work permit. Additional requirements vary depending on
              whether you want to deliver using a scooter, a car, or a bike.
              You'll be informed about which documents are required based
              on your selected contract type."
            />
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
