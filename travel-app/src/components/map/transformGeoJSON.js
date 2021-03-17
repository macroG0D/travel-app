import geoJSON from '../../data/geoJSON.json';

const transformGeoJSON = (title) =>  {
  const features = geoJSON.features.filter((({ properties }) => properties.name === title));
  const countryGeoJSON = { ...geoJSON, features };

  return countryGeoJSON;
}

export default transformGeoJSON;
