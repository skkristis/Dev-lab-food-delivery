import "./index.scss";

function RestaurantPromo1() {
  return (
    <div className="promo1__section">
      <div className="restaurant-signup__container">
        <div className="promo1__wrapper">
          <h2 className="promo1__title">
            Join the best food delivery and boost your online sales!
          </h2>
          <h3 className="promo1__description">
            Join us and increase your turnover up to 30%
          </h3>
          <ul className="promo1__list">
            <h4 className="promo1__list-item">
              Signup discount of <span>50%</span>
            </h4>
            <h4 className="promo1__list-item">
              From <span>12%</span> commission
            </h4>
          </ul>
          <div className="promo1__btns">
            <button className="promo1__button">Sign up for bfd.lt</button>
            <button className="restaurant-signup__button">
              Sign up for a free workshop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RestaurantPromo1;
