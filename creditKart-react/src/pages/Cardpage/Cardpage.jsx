// src/pages/CardPage/CardPage.jsx

import React from 'react';
// Go UP from 'CardPage', UP from 'pages', DOWN into 'components'
import Card from '../../components/Card/Card.jsx'; 
import './CardPage.css';

// In a real app, this data would come from an API (a database)
const cardData = [
  {
    id: 1,
    title: 'PhonePe SBI Select Black',
    rating: '4.5',
    cardImage: 'https://i.imgur.com/LPaPEi0.png', // Using placeholders
    bankLogo: 'https://i.imgur.com/sT5yvjS.png', // Using placeholders
    description: 'PhonePe has teamed up with SBI Card to launch its second co-branded credit card offering...',
    annualFee: '₹1,499 + GST'
  },
  {
    id: 2,
    title: 'SBI SimplyCLICK Credit Card',
    rating: '4.3',
    cardImage: 'https://i.imgur.com/dJAl0c1.png',
    bankLogo: 'https://i.imgur.com/sT5yvjS.png',
    description: 'Popular entry-level online shopping card with 10X rewards on partner merchants...',
    annualFee: '₹499 + GST'
  },
  {
    id: 3,
    title: 'SBI Card Pulse',
    rating: '4.2',
    cardImage: 'https://i.imgur.com/v8p0xXQ.png',
    bankLogo: 'https://i.imgur.com/sT5yvjS.png',
    description: 'Health-and-lifestyle focused SBI credit card with premium wellness memberships...',
    annualFee: '₹1,499 + GST'
  },
  {
    id: 4,
    title: 'Axis Bank Horizon Card',
    rating: '4.3',
    cardImage: 'https://i.imgur.com/gKHYsPq.png',
    bankLogo: 'https://i.imgur.com/E8RkLdG.png',
    description: 'Axis Bank’s flagship mid-range travel card with strong EDGE Miles rewards, lounge access...',
    annualFee: '₹3,000 + GST'
  }
];

function CardPage() {
  return (
    <div className="card-page">
      {/* This is the magic. We map over the data array... */}
      {cardData.map(card => (
        
        // ...and render one "Card" component for each item.
        // We pass the card object's properties as props.
        <Card
          key={card.id} // "key" is a special prop React needs for lists
          {...card}     // "{...card}" is a fast way to pass all properties
        />
        
      ))}
    </div>
  );
}

export default CardPage;