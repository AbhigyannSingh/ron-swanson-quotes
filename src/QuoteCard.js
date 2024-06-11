import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, onNewQuote, onSaveQuote }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <div className="quote-card-buttons">
        <button onClick={onNewQuote}>New Quote</button>
        <button onClick={onSaveQuote}>Save Quote</button>
      </div>
    </div>
  );
};

export default QuoteCard;
