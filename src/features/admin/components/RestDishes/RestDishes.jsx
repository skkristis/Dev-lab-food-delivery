import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../../../store/reducers/dishesReducer';

import RestDishesNav from '../RestDishesNav/RestDishesNav';
import RestDishCard from '../RestDishCard/RestDishCard';
import RestDish from '../RestDish/RestDish';
import RestDishForm from '../RestDishForm/RestDishForm';

import './RestDishes.scss';

import restaurants from '../../mocks/restaurants';

function RestDishes() {
  const restaurant = restaurants[0];

  const dishes = useSelector((state) =>
    state.dishes.list.filter((dish) => dish.restaurantId === restaurant.id)
  );

  const [activeDish, setActiveDish] = useState(null);
  const [formState, setFormState] = useState('idle');

  const dispatch = useDispatch();
  const dispatchRemove = (dish) => dispatch(remove(dish));

  const handleRemove = () => {
    dispatchRemove(activeDish.id);
    setActiveDish(null);
    setFormState('idle');
  };

  return (
    <div className="rest-dishes">
      <RestDishesNav
        activeDish={activeDish}
        setActiveDish={setActiveDish}
        formState={formState}
        setFormState={setFormState}
        handleRemove={handleRemove}
      />

      <div className="rest-dishes__content">
        {formState === 'idle' ? (
          activeDish && <RestDish dish={activeDish} />
        ) : (
          <RestDishForm
            dish={activeDish}
            allDishes={dishes}
            setActiveDish={setActiveDish}
            formState={formState}
            setFormState={setFormState}
          />
        )}

        {formState === 'idle' && !activeDish && (
          <div className="rest-dishes__list dish-list">
            {dishes.length > 0 ? (
              dishes.map((dish) => (
                <RestDishCard
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

export default RestDishes;
