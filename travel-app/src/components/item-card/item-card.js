import React from 'react';
import ATTRACTIONS from '../../data/ATTRACTIONS.json';

const ItemCard = ({ id }) => {
  const { title, capital } = ATTRACTIONS[id];
  const itemCardImage = {
    background: `url('/images/${id}/main.jpg')`,
    backgroundSize: 'cover',
  };

  return (
    <div style={itemCardImage} className="item-card">
      <div className="item-card item-card__content">
        <div className="item-card__infoblock">
          <h3>{title}</h3>
          <p className="item-card__capital">{capital}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
