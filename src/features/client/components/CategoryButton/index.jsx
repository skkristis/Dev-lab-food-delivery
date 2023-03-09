import { Button } from '@chakra-ui/react';

const CategoryButton = ({ category, onClick, buttonColor, isDisabled }) => {
  return (
    <Button
      onClick={onClick}
      display="block"
      minWidth="fit-content"
      fontSize="20px"
      borderRadius="lg"
      color={buttonColor === 'blue' ? 'white' : 'black'}
      colorScheme={buttonColor}
      isDisabled={isDisabled}
      opacity="1 !important"
      cursor="pointer !important"
    >
      {category}
    </Button>
  );
};

export default CategoryButton;
