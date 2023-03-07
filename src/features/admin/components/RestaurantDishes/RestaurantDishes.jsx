import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addList, remove } from '../../../../store/reducers/dishesReducer';
import axios from '../../../../../src/services/axios';

import RestaurantDishesNav from '../RestaurantDishesNav/RestaurantDishesNav';
import RestaurantDishCard from '../RestaurantDishCard/RestaurantDishCard';
import RestaurantDish from '../RestaurantDish/RestaurantDish';
import RestaurantDishForm from '../RestaurantDishForm/RestaurantDishForm';

import './RestaurantDishes.scss';

function RestaurantDishes() {
  const restaurantId = '98a151f2-3193-40c5-993a-ad032f414317';

  const dishes = useSelector((state) =>
    state.dishes.list.filter((dish) => dish.restaurantId === restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getMerchant = async () =>
      await axios.get(`/api/merchants/${restaurantId}`);

    getMerchant().then((response) => {
      const dishList = response.data.data.items.map((dish) => ({
        ...dish,
        restaurantId,
      }));
      dispatch(addList(dishList));
    });
  }, []);

  const [activeDish, setActiveDish] = useState(null);
  const [formState, setFormState] = useState('idle');

  const handleRemove = () => {
    dispatch(remove(activeDish.id));
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
            allDishes={dishes}
            setActiveDish={setActiveDish}
            formState={formState}
            setFormState={setFormState}
          />
        )}

        {formState === 'idle' && !activeDish && (
          <div className="restaurant-dishes__list dish-list">
            {dishes.length > 0 ? (
              dishes.map((dish) => (
                <RestaurantDishCard
                  key={dish.id}
                  dish={dish}
                  setActive={setActiveDish}
                />
              ))
            ) : (
              <p className="dish-list__empty">No dishes added yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantDishes;
