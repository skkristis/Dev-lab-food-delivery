import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import './index.css';

import Discovery from '../../components/Discovery';
import RestaurantList from '../../components/RestaurantList';
import FilterByCategory from '../../components/FilterByCategory';

function ClientLanding() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentMerchantType, setCurrentMerchantCategory] =
    useState('restaurant');

  return (
    <Flex as="section" flexDir="column" gap="20px" mt="50px">
      <FilterByCategory
        categoryId={'scroll2'}
        setSelectedCategory={setSelectedCategory}
        currentMerchantType={currentMerchantType}
        setCurrentMerchantCategory={setCurrentMerchantCategory}
      />
      <Discovery />
      <RestaurantList
        currentMerchantType={currentMerchantType}
        selectedCategory={selectedCategory}
      />
    </Flex>
  );
}

export default ClientLanding;
