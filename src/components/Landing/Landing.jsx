import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import HeaderBg from "../../assets/header-bg.png";
import HeaderCar from "../../assets/header-car.png";

export const Landing = () => {
  return (
    <header>
      <div className="container">
        <img src={HeaderBg} alt="" className="header-bg" />
        <div className="row header__row">
          <div className="header__text">
            <h2 className="header__text__subtitle">Plan Your Trip Now</h2>
            <h1 className="header__text__title">
              Save <span className="color-primary">big</span> with our car
              rental
            </h1>
            <p className="header__text__para">
              Rent the car of your dreams, unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="header__text__btns">
              <Link to="/models">
                <button className="header__text__btn header__text__book">
                  <span className="header__text__btn__span">Book Ride</span>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="header__text__btn__icon"
                  />
                </button>
              </Link>
              <a href="#features">
                <button className="header__text__btn header__text__learn">
                  <span className="header__text__btn__span">Learn More</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="header__text__btn__icon"
                  />
                </button>
              </a>
            </div>
          </div>
          <figure className="header__img__wrapper">
            <img src={HeaderCar} alt="" className="header__img" />
          </figure>
        </div>
      </div>
    </header>
  );
};
