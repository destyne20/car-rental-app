import React from "react";
import GooglePlay from "../assets/google-play.svg";
import AppStore from "../assets/app-store.svg";

const Downloads = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="row download__row">
          <div className="download__text">
            <h2 className="download__text__title">
              Download our app to get the most out of it
            </h2>
            <p className="download__text__para">
              Find the best rate available at the tip of your finger. Never miss
              an opportunity to explore when it best suits you!
            </p>
            <div className="download__text__links">
              <a
                href="https://play.google.com/store/games?hl=en"
                className="download__text__link"
                target="_blank"
              >
                <img
                  src={GooglePlay}
                  alt="google play logo"
                  className="download__text__link__img"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                className="download__text__link"
                target="_blank"
              >
                <img
                  src={AppStore}
                  alt="app store logo"
                  className="download__text__link__img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
