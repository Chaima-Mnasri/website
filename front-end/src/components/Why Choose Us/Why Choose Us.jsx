import React from 'react';
import { motion } from 'framer-motion';
import "./WhyChooseUs.css";
import yoga from '../../assets/yoga.jpg';

const WhyChooseUs = () => {
  const stats = [
    { id: 1, label: 'Happy Customers', value: 2000 },
    { id: 2, label: 'Years of Experience', value: 6 },
    { id: 3, label: 'Satisfaction', value: 94, suffix: '%' },
  ];

  return (
    <div className="why-choose-us">
      {/* Foto-Bereich */}
      <div className="photo-container">
        <img
          src={yoga} 
          alt="Relaxation"
          className="photo"
        />
      </div>

      {/* Statistiken-Bereich */}
      <div className="stats-container">
        <h2>Why Choose Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tenetur possimus nam totam.
        </p>
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: stat.id * 0.3 }}
                className="stat-value"
              >
                <motion.span
                  initial={{ textContent: '0' }}
                  animate={{ textContent: stat.value }}
                  transition={{
                    duration: 2,
                    ease: 'easeOut',
                  }}
                >
                  {stat.value}
                </motion.span>
                {stat.suffix && stat.suffix}
              </motion.div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
