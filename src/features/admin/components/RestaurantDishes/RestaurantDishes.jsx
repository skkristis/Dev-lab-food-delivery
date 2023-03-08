import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  removeItem,
} from '../../../../store/reducers/restaurantsManagementReducer';
import axios from '../../../../../src/services/axios';

import { Spinner } from '@chakra-ui/react';
import RestaurantDishesNav from '../RestaurantDishesNav/RestaurantDishesNav';
import RestaurantDishCard from '../RestaurantDishCard/RestaurantDishCard';
import RestaurantDish from '../RestaurantDish/RestaurantDish';
import RestaurantDishForm from '../RestaurantDishForm/RestaurantDishForm';

import './RestaurantDishes.scss';

function RestaurantDishes() {
  const merchantId = '98a151f2-3193-40c5-993a-ad032f414317';

  const merchants = useSelector((state) => state.restaurantsManagement.list);
  const currentMerchant = merchants.find(
    (merchant) => merchant.id === merchantId
  );
  const merchantItems = currentMerchant ? currentMerchant.items : [];

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentMerchant) {
      const getMerchant = async () =>
        await axios.get(`/api/merchants/${merchantId}`);

      getMerchant().then((response) => dispatch(add(response.data.data)));
    }
  }, []);

  const [activeDish, setActiveDish] = useState(null);
  const [formState, setFormState] = useState('idle');

  const handleRemove = () => {
    dispatch(removeItem(activeDish.id));
    setActiveDish(null);
    setFormState('idle');
  };

  return (
    <div className="restaurant-dishes">
      <RestaurantDishesNav
        activeDish={activeDish}
        setActiveDish={setActiveDish}
        formState={formState}
        setFormState={setFormState}
        handleRemove={handleRemove}
      />

      <div className="restaurant-dishes__content">
        {formState === 'idle' ? (
          activeDish && <RestaurantDish dish={activeDish} />
        ) : (
          <RestaurantDishForm
            dish={activeDish}
            allDishes={merchantItems}
            setActiveDish={setActiveDish}
            formState={formState}
            setFormState={setFormState}
          />
        )}

        {formState === 'idle' && !activeDish && (
          <>
            {!merchantItems.length && !currentMerchant && (
              <Spinner size="xl" alignSelf="center" />
            )}

            <div className="restaurant-dishes__list dish-list">
              {merchantItems.length > 0
                ? merchantItems.map((item) => (
                    <RestaurantDishCard
                      key={item.id}
                      dish={item}
                      setActive={setActiveDish}
                    />
                  ))
                : currentMerchant && (
                    <p className="dish-list__empty">No dishes added yet</p>
                  )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RestaurantDishes;
