import React, {useContext} from 'react';
import { Context } from '../../components/context';
import ItemCard from '../../components/item-card';
import { ATTRACTIONSEN, ATTRACTIONSRU, ATTRACTIONSDE } from '../../data';

const Main = ({filterVal}) => {
  const [lang] = useContext(Context);
  const data =
    lang === 'en'
      ? ATTRACTIONSEN
      : lang === 'ru'
      ? ATTRACTIONSRU
      : ATTRACTIONSDE;
  const trimmedFilter = filterVal.trim().toLowerCase();
  const filterIsEmpty = trimmedFilter === '';

  const filteredAttractions = filterIsEmpty ? data : 
    data.filter(({ title, capital }) => title.toLowerCase().includes(trimmedFilter) || capital.toLowerCase().includes(trimmedFilter));

  const CountriesCards = () =>
  filteredAttractions.map(({ id }) => (
    <ItemCard key={`mainCard-${id}`} id={id} />
  ));

  return (
    <div className="item-card-wrapper">
      <CountriesCards />
    </div>
  );
};

export default Main;
