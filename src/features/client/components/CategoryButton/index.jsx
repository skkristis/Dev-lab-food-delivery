import { Button } from '@chakra-ui/react';

const CategoryButton = ({ category, onClick }) => {
  return (
    <Button
      onClick={onClick}
      display="block"
      minWidth="fit-content"
      fontSize="20px"
      borderRadius="lg"
      bg="white"
    >
      {category}
    </Button>
  );
};

export default CategoryButton;
