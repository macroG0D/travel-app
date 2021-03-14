import React, { useState, useEffect } from 'react';
import ATTRACTIONS from '../../data/ATTRACTIONSEN.json';

const ExchangeItem = ({countryCurrency, title, value}) => {
  const currencySymbol = (() => {
    switch(title){
      case 'EUR':
        return '€';
      case 'USD':
        return '$';
      case 'RUB':
        return '₽';  
      default:
        return title;
    }
  })(); 
  
  return(
    <div className="exchange-rates__item">
      <span className="exchange-rates__description">{`${countryCurrency} : ${currencySymbol}`}</span>
      <span className="exchange-rates__value">{value}</span>
    </div>
  )
}

const ExchangeRates = ({ id }) => {
  const { currency } = ATTRACTIONS[id];
  const [ rates, setRates ] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest?places=2&symbols=EUR,USD,RUB&base=${currency.code}`)
      .then(resp => resp.json())
      .then(data => setRates(data.rates))
  },[currency.code]);

  const renderItems = (arr) => {
    const elements = arr.map((item, index) => {
      return <ExchangeItem countryCurrency={ currency.code }
        title={ item[0] }
        value={ item[1] }
        key={index}/>
    })
    return elements;
  };

	return ( 
		<div className="exchange-rates">
      <h3 className="exchange-rates__title">{currency.name}</h3>
      {rates ? renderItems(Object.entries(rates)) : <div>No data yet</div>}
    </div>
	)
};

export default ExchangeRates;