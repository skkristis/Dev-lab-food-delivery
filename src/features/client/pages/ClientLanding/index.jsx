import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import './index.css';

import Discovery from '../../components/Discovery';
import RestaurantList from '../../components/RestaurantList';
import FilterByCategory from '../../components/FilterByCategory';
import { restaurantItems, groceryItems } from '../../../../constants';

function ClientLanding() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentMerchantType, setCurrentMerchantCategory] =
    useState('restaurants');

  return (
    <Flex as="section" flexDir="column" gap="20px" mt="50px">
      <FilterByCategory
        restaurantItems={restaurantItems}
        groceryItems={groceryItems}
        categoryId={'scroll2'}
        setSelectedCategory={setSelectedCategory}
        setCurrentMerchantCategory={setCurrentMerchantCategory}
        currentMerchantType={currentMerchantType}
      />
      <Discovery />
      <RestaurantList
        selectedCategory={selectedCategory}
        currentMerchantType={currentMerchantType}
      />
    </Flex>
  );
}

export default ClientLanding;
