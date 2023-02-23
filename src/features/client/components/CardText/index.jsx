import React from 'react';
import { Card, CardBody, Text, CardFooter, Box } from '@chakra-ui/react';

function CardText(props) {
  const { textBody, textFooter } = props;
  return (
    <Card textAlign="center" alignItems="center" width="300px">
      <CardBody>
        <Text>{textBody}</Text>
      </CardBody>
      <CardFooter>
        <Box>
          <Text>{textFooter}</Text>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default CardText;
