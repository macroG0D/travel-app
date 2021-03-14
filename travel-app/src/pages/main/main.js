import ItemCard from '../../components/item-card';
import ATTRACTIONS from '../../data/ATTRACTIONSEN.json';
import {NavLink} from 'react-router-dom';

const Main = ({filterVal}) => {
  const trimmedFilter = filterVal.trim().toLowerCase();
  const filterIsEmpty = trimmedFilter === '';

  const filteredAttractions = filterIsEmpty ? ATTRACTIONS :
    ATTRACTIONS.filter(({title, capital}) => title.toLowerCase().includes(trimmedFilter) || capital.toLowerCase().includes(trimmedFilter));


  const CountriesCards = () => filteredAttractions.map(({id}) => {
    return (
      <NavLink to={`/country/${id}`} key={id}>
        <ItemCard
          key={`mainCard-${id}`}
          id={id}/>
      </NavLink>
    )
  });

  return (
    <div className="item-card-wrapper">
      <CountriesCards/>
    </div>
  );
};

export default Main;
