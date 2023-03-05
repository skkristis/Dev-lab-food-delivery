import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import './index.css';

import Discovery from '../../components/Discovery';
import RestaurantList from '../../components/RestaurantList';
import FilterByCategory from '../../components/FilterByCategory';
import { restaurantItems, groceryItems } from '../../../../constants';

function ClientLanding() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleSelectCategory(categoryName) {
    if (categoryName === 'All') {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  }
  return (
    <Flex as="section" flexDir="column" gap="20px">
      <FilterByCategory
        restaurantItems={restaurantItems}
        groceryItems={groceryItems}
        categoryId={'scroll2'}
        onSelectCategory={handleSelectCategory}
      />
      <Discovery />
      <RestaurantList selectedCategory={selectedCategory} />
    </Flex>
  );
}

export default ClientLanding;
