import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import './index.scss';
import ScrollButton from '../ScrollButton';
import { useState } from 'react';
import CategoryButton from '../CategoryButton';
import { categories } from '../../../../constants';

function FilterByCategory({
  restaurantItems,
  groceryItems,
  bgColor,
  categoryId,
  onSelectCategory,
}) {
  const [currentCategory, setCurrentCategory] = useState('restaurants');

  const [smallerScreen] = useMediaQuery('(max-width: 1100px)');

  const handleCategoryClick = (value) => {
    setCurrentCategory(value);
  };

  return (
    <>
      <Flex justifyContent="center">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            category={category.category}
            onClick={() => handleCategoryClick(category.value)}
          />
        ))}
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
                  onClick={() => onSelectCategory(item.name)}
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
                  onClick={() => onSelectCategory(item.name)}
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
