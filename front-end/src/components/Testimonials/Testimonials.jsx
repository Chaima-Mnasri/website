import React from "react";
import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>BE STRONG TRANING HARD!</h2>

        <div className="content-container">
          {/* Testimonial 1 */}
          <div className="testimonial">
            <img src={testimonial1} alt="Peter Adams" />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="review">
                <div className="company-name">Google</div>
                <p>I supported clients in achieving their fitness goals, managed equipment organization, and ensured the studio remained welcoming for all visitors.</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial">
            <img src={testimonial2} alt="Jane Doe" />
            <div className="reviewer-details">
              <div className="name">Jane Doe</div>
              <div className="review">
                <div className="company-name">Facebook</div>
                <p>I have gained valuable experience working in a fitness studio!</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial">
            <img src={testimonial3} alt="John Smith" />
            <div className="reviewer-details">
              <div className="name">John Smith</div>
              <div className="review">
                <div className="company-name">INSTAGRAM</div>
                <p>I This experience has enhanced my communication skills and passion for promoting a healthy lifestyle!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
