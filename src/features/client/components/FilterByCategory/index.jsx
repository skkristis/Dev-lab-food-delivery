import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import './index.scss';
import ScrollButton from '../ScrollButton';
import { useState } from 'react';
import CategoryButton from '../CategoryButton';
import { merchantTypes } from '../../../../constants';

function FilterByCategory({
  restaurantItems,
  groceryItems,
  bgColor,
  categoryId,
  setSelectedCategory,
}) {
  const [currentCategory, setCurrentCategory] = useState('restaurants');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeMerchantTypeIndex, setActiveMerchantTypeIndex] = useState(0);

  const [smallerScreen] = useMediaQuery('(max-width: 1100px)');

  const handleMerchantTypeClick = (value, index) => {
    setSelectedCategory('All');
    setCurrentCategory(value);
    setActiveCategoryIndex(index);
    setActiveMerchantTypeIndex(0);
  };

  const handleTypeClick = (index) => {
    setActiveMerchantTypeIndex(index);
  };

  return (
    <>
      <Flex justifyContent="center">
        {merchantTypes.map((category, index) => (
          <CategoryButton
            key={index}
            category={category.category}
            onClick={() => handleMerchantTypeClick(category.value, index)}
            buttonColor={index === activeCategoryIndex ? 'blue' : 'white'}
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
            ? restaurantItems.map((item, index) => (
                <Button
                  borderRadius="lg"
                  key={item.name}
                  display="block"
                  minWidth="fit-content"
                  fontSize="20px"
                  onClick={() => {
                    setSelectedCategory(item.name);
                    handleTypeClick(index);
                  }}
                  color={index === activeMerchantTypeIndex ? 'white' : 'black'}
                  colorScheme={
                    index === activeMerchantTypeIndex ? 'blue' : 'white'
                  }
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))
            : groceryItems.map((item, index) => (
                <Button
                  borderRadius="lg"
                  key={item.name}
                  display="block"
                  minWidth="fit-content"
                  fontSize="20px"
                  onClick={() => {
                    setSelectedCategory(item.name);
                    handleTypeClick(index);
                  }}
                  color={index === activeMerchantTypeIndex ? 'white' : 'black'}
                  colorScheme={
                    index === activeMerchantTypeIndex ? 'blue' : 'white'
                  }
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
