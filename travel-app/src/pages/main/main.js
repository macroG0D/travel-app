import ItemCard from '../../components/item-card';
import ATTRACTIONS from '../../data/ATTRACTIONS.json';



const Main = ({filterVal}) => {
  const trimmedFilter = filterVal.trim().toLowerCase();
  const filterIsEmpty = trimmedFilter === '';

  const filteredAttractions = filterIsEmpty ? ATTRACTIONS : 
    ATTRACTIONS.filter(({ title, capital }) => title.toLowerCase().includes(trimmedFilter) || capital.toLowerCase().includes(trimmedFilter));

  const CountriesCards = () => filteredAttractions.map(({id}) => <ItemCard key={`mainCard-${id}`} id={id} />);

  return (
    <div className="item-card-wrapper">
      <CountriesCards />
    </div>
  );
};

export default Main;
