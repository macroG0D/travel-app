import React, { useContext } from 'react';
import Context from '../context';
import { ATTRACTIONSEN, ATTRACTIONSRU, ATTRACTIONSDE } from '../../data';

const ItemCard = ({ id }) => {
  const [lang] = useContext(Context);
  const data =
    lang === 'en'
      ? ATTRACTIONSEN
      : lang === 'ru'
      ? ATTRACTIONSRU
      : ATTRACTIONSDE;
  const { title, capital } = data[id];

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
