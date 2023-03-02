import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import './index.scss';
import ScrollButton from '../ScrollButton';
import { useState } from 'react';

function FilterByCategory({
  restaurantItems,
  groceryItems,
  bgColor,
  categoryId,
}) {
  const [currentCategory, setCurrentCategory] = useState('restaurants');

  const [smallerScreen] = useMediaQuery('(max-width: 1100px)');
  return (
    <>
      <Flex flexDir="row" justifyContent="center">
        <Button
          onClick={() => setCurrentCategory('restaurants')}
          display="block"
          minWidth="fit-content"
          fontSize="20px"
          borderRadius="lg"
          bg="white"
        >
          🍝 Restaurants
        </Button>
        <Button
          onClick={() => setCurrentCategory('grocery')}
          display="block"
          minWidth="fit-content"
          fontSize="20px"
          borderRadius="lg"
          bg="white"
        >
          🛒 Grocery
        </Button>
      </Flex>
      <Flex justifyContent="center">
        {categoryId && smallerScreen && (
          <ScrollButton
            rightButton={false}
            variant="ghost"
            id={`#${categoryId}`}
          />
        )}
        <Flex backgroundColor={bgColor} className="category" id={categoryId}>
          {currentCategory === 'restaurants'
            ? restaurantItems.map((item) => (
                <Button
                  borderRadius="lg"
                  bg="white"
                  key={item.name}
                  display="block"
                  minWidth="fit-content"
                  fontSize="20px"
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))
            : groceryItems.map((item) => (
                <Button
                  borderRadius="lg"
                  bg="white"
                  key={item.name}
                  display="block"
                  minWidth="fit-content"
                  fontSize="20px"
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
        </Flex>
        {categoryId && smallerScreen && (
          <ScrollButton
            rightButton={true}
            variant="ghost"
            id={`#${categoryId}`}
          />
        )}
      </Flex>
    </>
  );
}

export default FilterByCategory;
