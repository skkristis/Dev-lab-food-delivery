import React from 'react';

import './RestDish.scss';

function RestDish({ dish }) {
  return (
    <div className={`rest-dish is-${dish.status}`}>
      <img
        className="rest-dish__image"
        src={dish.image}
        alt={`${dish.name} image`}
      />

      <div className="rest-dish__content">
        <p className="rest-dish__title">{dish.name}</p>
        <p className="rest-dish__price">Price: {dish.price} EUR</p>
        <p className="rest-dish__status">
          Current status: <span>{dish.status}</span>
        </p>

        <p className="rest-dish__description">{dish.description}</p>

        <div className="rest-dish__ingredients ingredients">
          <p className="ingredients__title">Ingredients:</p>
          <ul className="ingredients__list">
            {dish.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RestDish;
