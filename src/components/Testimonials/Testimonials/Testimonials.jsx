import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Testimonial } from "../Testimonial";
import Testimonial1 from "../../../assets/testimonial-1.jpg";
import Testimonial2 from "../../../assets/testimonial-2.jpg";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row testimonials__row">
          <h3 className="testimonials__subtitle">Reviewed by People</h3>
          <h2 className="testimonials__title">Client's Testimonials</h2>
          <p className="testimonials__para">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and the're eager to share their positive
            experiences with you.
          </p>
          <div className="testimonials__list">
            <Testimonial
              image={Testimonial1}
              name="Parry Hotter"
              location="New York"
              text="We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."
            />
            <Testimonial
              image={Testimonial2}
              name="Ron Rizzly"
              location="London"
              text="Love the app! So easy to use to find the best rates available. The customer service is top-notch too (thank you Jenny)!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
