import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './index.css';

import Discovery from '../../components/Discovery';
import RestaurantList from '../../components/RestaurantList';
import FilterByCategory from '../../components/FilterByCategory';
import { clearBasket } from '../../../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';

function ClientLanding() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentMerchantType, setCurrentMerchantCategory] =
    useState('restaurant');

  useEffect(() => {
    dispatch(clearBasket());
  });

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
