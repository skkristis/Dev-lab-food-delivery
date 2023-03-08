import { Center, Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import './index.scss';
import ScrollButton from '../ScrollButton';
import { useState } from 'react';
import CategoryButton from '../CategoryButton';
import { merchantTypes } from '../../../../constants';
import MerchantTypeButton from '../../MerchantTypeButton';
import { useQuery } from 'react-query';
import merchantService from '../../../../services/merchantService';
import { Spinner } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

function FilterByCategory({
  bgColor,
  categoryId,
  setSelectedCategory,
  currentMerchantType,
  setCurrentMerchantCategory,
}) {
  const { isLoading, data: fetchedCategoryData } = useQuery(
    ['categories', currentMerchantType],
    merchantService.getCategoryList
  );
  const dispatch = useDispatch();

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeMerchantTypeIndex, setActiveMerchantTypeIndex] = useState(null);

  const [smallerScreen] = useMediaQuery('(max-width: 1100px)');

  const handleMerchantTypeClick = (value, index) => {
    setCurrentMerchantCategory(value);
    setActiveMerchantTypeIndex(null);

    setSelectedCategory(null);
    setActiveCategoryIndex(index);
  };

  const handleCategoryTypeClick = (id, name, index) => {
    setActiveMerchantTypeIndex(index);
    setSelectedCategory({ id, name });
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
            isDisabled={index === activeCategoryIndex}
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
          {fetchedCategoryData?.data.map((item, index) => (
            <MerchantTypeButton
              item={item}
              key={item.name}
              index={index}
              activeMerchantTypeIndex={activeMerchantTypeIndex}
              handleCategoryTypeClick={handleCategoryTypeClick}
            />
          ))}
          {isLoading && (
            <Center marginTop="20px">
              <Spinner size="md" />
            </Center>
          )}
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
