import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Circle(props) {
  const { circleText, bodyText } = props;

  return (
    <Box display="flex" alignItems="center" flexDirection="column" width="33%">
      <div className="circle">{circleText}</div>
      {bodyText ? <Text>{bodyText}</Text> : <></>}
    </Box>
  );
}

export default Circle;
