// import geoJSON from '../../data/geoJSON.json';
import geoJSON from '../../data/countries.json';

const transformGeoJSON = (title) =>  {
  const features = geoJSON.features.filter((({ properties }) => properties.ADMIN === title));
  const countryGeoJSON = { ...geoJSON, features };

  return countryGeoJSON;
}

export default transformGeoJSON;
