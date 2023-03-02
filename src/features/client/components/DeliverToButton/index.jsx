import { Button, Image, Text, Box } from '@chakra-ui/react';
import locationUrl from '../../../../assets/location-icon.svg';
import arrowDownUrl from '../../../../assets/arrow-down-icon.svg';

function DeliverToButton() {
  return (
    <Button variant="ghost" display="flex" gap="10px">
      <Image
        boxSize="30px"
        src={locationUrl}
        padding="5px"
        rounded="full"
        bg="blue.400"
      />
      <Text fontWeight="light">
        Delivery to
        <br />
        <Box as="span" color="blue.400" fontWeight="semibold">
          Vilnius
        </Box>
      </Text>
      <Image boxSize="20px" src={arrowDownUrl} />
    </Button>
  );
}

export default DeliverToButton;
