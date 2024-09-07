import { useState } from "react";

export const Footer = () => {
  const [emailAddress, setEmailAddress] = useState(null);

  function handleSubmit(event) {
    console.log("email address", emailAddress);
    event.preventDefault();
  }

  return (
    <footer id="footer">
      <div className="container">
        <div className="row footer__row">
          <div className="footer__intro footer__content">
            <h4 className="footer__intro__title">Car Rental</h4>
            <p className="footer__intro__para">
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <div className="footer__intro__links">
              <a href="tel:123-456-789" className="footer__intro__link">
                (123)-456-789
              </a>
              <a
                href="mailto:carrental@example.com"
                className="footer__intro__link"
              >
                carrental@example.com
              </a>
              <a
                href="https://xpeedstudio.com"
                target="_blank"
                className="footer__intro__link"
              >
                Design by XpeedStudio
              </a>
            </div>
          </div>
          <div className="footer__company footer__content">
            <h4 className="footer__company__title">Company</h4>
            <div className="footer__company__links">
              <a href="#footer" className="footer__company__link">
                New York
              </a>
              <a href="#footer" className="footer__company__link">
                Careers
              </a>
              <a href="#footer" className="footer__company__link">
                Mobile
              </a>
              <a href="#footer" className="footer__company__link">
                Blog
              </a>
              <a href="#footer" className="footer__company__link">
                How we work
              </a>
            </div>
          </div>
          <div className="footer__hours footer__content">
            <h4 className="footer__hours__title">Working Hours</h4>
            <div className="footer__hours__list">
              <span className="footer__hours__time">
                Mon - Fri: 9:00AM - 9:00PM
              </span>
              <span className="footer__hours__time">Sat: 9:00AM - 19:00PM</span>
              <span className="footer__hours__time">Sun: Closed</span>
            </div>
          </div>
          <div className="footer__email footer__content">
            <h4 className="footer__email__title">Subscription</h4>
            <p className="footer__email__para">
              Subscribe your email address for latest news & updates.
            </p>
            <form className="footer__email__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="footer__email__form__input"
                onChange={(event) => setEmailAddress(event.target.value)}
                required
              />
              <button className="footer__email__form__submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
