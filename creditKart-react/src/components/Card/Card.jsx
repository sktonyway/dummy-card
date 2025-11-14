import React from 'react';
import './Card.css'; // We'll create this next for styling

// This is a "prop" driven component.
// We pass in objects like { title, rating, ... } as props.
function Card({ title, rating, cardImage, description, annualFee, bankLogo, applyLink }) {
  return (
    <div className="card">

      {/* Card Header */}
      <div className="card-header">
        <div className="card-title-rating">
          <h3>{title}</h3>
          <span className="card-rating">⭐ {rating}</span>
        </div>
        <img src={bankLogo} alt={`${title} logo`} className="bank-logo" />
      </div>

      {/* Card Body */}
      <div className="card-body">
        <div className="card-wrapper">
          <img src={cardImage} alt={title} className="card-image" />
        </div>
        <p>{description}
          <a href="#" className="read-more">... read more</a>
        </p>
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        <div className="annual-fee">
          <span>Annual Fee</span>
          <strong>₹{annualFee}</strong>
        </div>
        <a href={applyLink} target='_blank' rel='noopener noreferrer'>
        <button className="apply-button">Apply Now</button>
       </a>
      </div>
    </div>
  );
}

export default Card;