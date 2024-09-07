import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SuccessPopUp = ({ successOpen }) => {
  return (
    <div className={`success ${successOpen && `success-open`}`}>
      <FontAwesomeIcon icon={faCircleCheck} />
      <span>Ride successfully booked!</span>
    </div>
  );
};

export default SuccessPopUp;
