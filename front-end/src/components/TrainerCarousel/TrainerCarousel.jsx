import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./TrainerCarousel.css";
import jane1 from "../../assets/jane1.jpg";
import Patrick from "../../assets/Patrick.jpg";
import Maria from "../../assets/Maria.jpg";

const TrainerCarousel = () => {
  const trainers = [
    {
      name: "Patrick Kennedy",
      title: "Fitness Trainer",
      description: "Certified Personal Trainer with 6+ years of experience & Yoga",
      image: jane1,
    },
    {
      name: "Jane Doe",
      title: "Fitness Trainer",
      description: "Certified Personal Trainer with 5+ years of experience",
      image: Patrick,
    },
    {
      name: "Maria Laura",
      title: "Yoga Trainer",
      description: "Certified Personal Trainer Yoga with 4+ years of experience",
      image: Maria,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="trainer-carousel">
      <h2>OUR TRAINERS</h2>
      <p>
        Practice Yoga to perfect physical beauty, take care of your soul, and enjoy life more fully!
      </p>
      <Slider {...settings}>
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img 
              src={trainer.image} 
              alt={trainer.name} 
              className="trainer-image" 
            />
            <h3>{trainer.name}</h3>
            <h4>{trainer.title}</h4>
            <p>{trainer.description}</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TrainerCarousel;

