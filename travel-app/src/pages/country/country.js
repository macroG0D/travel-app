import React from 'react';
import VideoPlayer from '../../components/video-player';
import DateBlock from '../../components/date-block';
import ExchangeRates from '../../components/exchange-rates';
import Weather from '../../components/weather';
import Map from '../../components/map';
import ATTRACTIONS from '../../data/ATTRACTIONSEN.json';

const getCountryData = (id) => {
  return ATTRACTIONS[id];
};

const InnerMain = ({ id }) => {
  const { title, capital } = getCountryData(id);

  const mainBgImage = {
    backgroundImage: `url('/images/${id}/main.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="inner-main" style={mainBgImage}>
      <div className="inner-main__content">
        <h1 className="inner-main__country">{title}</h1>
        <h3 className="inner-main__capital">{capital}</h3>
      </div>
    </div>
  );
};

const InnerAbout = ({ id }) => {
  const { info } = getCountryData(id);
  return (
    <div className="inner-about">
      <p className="inner-about__description">{info}</p>
    </div>
  );
};

const InnerVideo = ({ id }) => {
  const { title } = getCountryData(id);
  return (
    <div className="inner-video">
      <h2>About {title}</h2>
      <VideoPlayer countryName={title} />
    </div>
  );
};

const InnerGallery = ({ id }) => {
  const { title } = getCountryData(id);
  return (
    <div className="inner-gallery">
      <div className="inner-gallery__content">
        <h2>Attractions in {title}</h2>
        <div className="inner-gallery__gallery-wrapper">
          gallery placeholder
        </div>
      </div>
    </div>
  );
};

const InnerWidgets = ({ id }) => {
  const { capital } = getCountryData(id);
  return (
    <div className="inner-widgets">
      <div className="inner-widgets__content">
        <h2 className="inner-widgets__header">{capital} Info</h2>
        <div className="inner-widgets__widgets-wrapper">
          <DateBlock id={id} />
          <ExchangeRates id={id} />
          <Weather id={id} />
        </div>
      </div>
    </div>
  );
};

const InnerMap = ({ id }) => {
  const { capital } = getCountryData(id);
  return (
    <div className="inner-map">
      <h2>Location of {capital}</h2>
      <Map id={id} />
    </div>
  );
};

const Country = ({id}) => {
  return (
    <div>
      <InnerMain id={id} />
      <InnerAbout id={id} />
      <InnerVideo id={id} />
      <InnerGallery id={id} />
      <InnerWidgets id={id} />
      <InnerMap id={id} />
    </div>
  );
};

export default Country;
