import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex, Text, useOutsideClick } from '@chakra-ui/react';
import { useRef, useState } from 'react';

function CheckoutItemQuantity({ dish }) {
  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {isModalOpen ? (
        <Flex
          alignItems="center"
          gap="10px"
          rounded="md"
          border="1px solid lightgray"
          padding="0px 5px"
        >
          <Button bg="white" rounded="full" variant="outline">
            -
          </Button>
          <Text>{dish.dishQuantity}</Text>
          <Button bg="white" rounded="full" variant="outline">
            +
          </Button>
          <Button bg="white" rounded="full" variant="outline">
            <DeleteIcon />
          </Button>
        </Flex>
      ) : (
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="outline"
          _hover={{
            border: '2px solid #4299e1',
          }}
        >
          {dish.dishQuantity}
        </Button>
      )}
    </>
  );
}

export default CheckoutItemQuantity;
