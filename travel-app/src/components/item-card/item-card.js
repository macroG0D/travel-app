import React from 'react';
import ATTRACTIONS from '../../data/ATTRACTIONS.json';

const ItemCard = ({id}) => {
	const itemCardImage = {
		background: `url('/images/${id}/main.jpg')`,
		 backgroundSize: 'cover'
	};

	return (
		<div style={itemCardImage} className="item-card" >
			<div className="item-card item-card__content" >
				<div className="item-card_infoblock" >
					<h3 >{ATTRACTIONS[id].title}</h3 >
					<p className="item-card_infoblock__capital" >{ATTRACTIONS[id].capital}</p >
				</div >
			</div >
		</div >
	)
};

export default ItemCard;