import ItemCard from '../../components/item-card';
import ATTRACTIONS from '../../data/ATTRACTIONS.json';

const CountriesCards = () => ATTRACTIONS.map(({id}) => <ItemCard key={`mainCard-${id}`} id={id} />);

const Main = () => {
  return (
    <div className="item-card-wrapper">
      <CountriesCards />
    </div>
  );
};

export default Main;
