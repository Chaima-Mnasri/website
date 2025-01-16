import React from "react";
import "./PricingPlans.css"; 

const PricingPlans = () => {
  const plans = [
    { title: "BEGINNER", price: "$59", features: ["Take Up To 7 Classes", "Available To Anyone", "Towels Included", "Never Expires"] },
    { title: "INTERMEDIATE", price: "$99", features: ["Take Up To 7 Classes", "Available To Anyone", "Towels Included", "Never Expires"] },
    { title: "ADVANCED", price: "$159", features: ["Take Up To 7 Classes", "Available To Anyone", "Towels Included", "Never Expires"] },
    { title: "PROFESSIONAL", price: "$199", features: ["Take Up To 7 Classes", "Available To Anyone", "Towels Included", "Never Expires"] },
  ];

  return (
    <div className="pricing-plans">
      <h2 className="pricing-title">PRICING PLANS</h2>
      <p className="pricing-description">Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price} <span>PER MONTH</span></p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="plan-button">GET STARTED</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
