import React, { useState } from "react";
import {
  faCalendarAlt,
  faCar,
  faLocationDot,
  faTimes,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Booking = ({
  carModels,
  bookingOpen,
  setBookingOpen,
  selectedModel,
  setSelectedModel,
  setSuccessOpen,
}) => {
  const [bookingLoading, setBookingLoading] = useState(false);
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);

  function handleSubmit(event) {
    if (!pickupDate || !dropoffDate || !pickupLocation || !dropoffLocation) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    setBookingLoading(true);

    setTimeout(() => {
      setBookingLoading(false);
      setBookingOpen(false);
      setSuccessOpen(true);
    }, 2000);

    setTimeout(() => {
      setSuccessOpen(false);
    }, 6000);

    console.log("Form Submitted");
  }

  return (
    <div className={`booking ${bookingOpen && "booking-open"}`}>
      <div className="booking__container">
        <button
          className="booking__close"
          onClick={() => setBookingOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3 className="booking__title">Book a Car</h3>
        <form action="" className="booking__form" onSubmit={handleSubmit}>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCar} />
              <span>
                Select Your Model <span className="required"></span>
              </span>
            </label>
            <select
              className="form__item__select"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
            >
              <option value="" disabled>
                Car Models
              </option>
              {carModels.map((model) => (
                <option key={model.id} value={`${model.make} ${model.model}`}>
                  {model.make} {model.model}
                </option>
              ))}
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Pick-Up Location</span>
            </label>
            <select
              className="form__item__select"
              onChange={(e) => {
                setPickupLocation(e.target.value);
              }}
            >
              <option value="" disabled>
                Pick-Up Location
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>Pick-up Date</span>
            </label>
            <input
              type="date"
              className="form__item__input"
              onClick={(e) => {
                e.currentTarget.showPicker();
              }}
              onChange={(e) => {
                setPickupDate(e.target.value);
              }}
            />
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Drop-off Location</span>
            </label>
            <select
              className="form__item__select"
              onChange={(e) => {
                setDropoffLocation(e.target.value);
              }}
            >
              <option value="" disabled>
                Drop-off Location
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>Drop-off Date</span>
            </label>
            <input
              type="date"
              className="form__item__input"
              onClick={(e) => {
                e.currentTarget.showPicker();
              }}
              onChange={(e) => {
                setDropoffDate(e.target.value);
              }}
            />
          </div>
          <button className="form__item__submit">
            {bookingLoading ? (
              <FontAwesomeIcon
                icon={faSpinner}
                className="form__item__submit__loading"
              />
            ) : (
              "Book Ride"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
