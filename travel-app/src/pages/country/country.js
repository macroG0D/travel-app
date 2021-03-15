import React, { useContext } from 'react';
import VideoPlayer from '../../components/video-player';
import DateBlock from '../../components/date-block';
import ExchangeRates from '../../components/exchange-rates';
import Weather from '../../components/weather';
import Map from '../../components/map';
import Gallery from '../../components/gallery';
import { ATTRACTIONSDE, ATTRACTIONSEN, ATTRACTIONSRU } from '../../data';
import { Context, ContextID } from '../../components/context';

const getCountryData = (lang, id) => {
  const ATTRACTION =
    lang === 'en'
      ? ATTRACTIONSEN
      : lang === 'ru'
      ? ATTRACTIONSRU
      : ATTRACTIONSDE;
  return ATTRACTION[id];
};

const InnerMain = () => {
  const [lang] = useContext(Context);
  const [id] = useContext(ContextID);
  const { title, capital } = getCountryData(lang, id);

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

const InnerAbout = () => {
  const [lang] = useContext(Context);
  const [id] = useContext(ContextID);
  const { info } = getCountryData(lang, id);
  return (
    <div className="inner-about">
      <p className="inner-about__description">{info}</p>
    </div>
  );
};

const InnerVideo = () => {
  const [id] = useContext(ContextID);
  const { title } = getCountryData('en', id);
  return (
    <div className="inner-video">
      <h2>About {title}</h2>
      <VideoPlayer countryName={title} />
    </div>
  );
};

const InnerGallery = () => {
  const [lang] = useContext(Context);
  const [id] = useContext(ContextID);
  const { title } = getCountryData(lang, id);
  return (
    <div className="inner-gallery">
      <div className="inner-gallery__content">
        <h2>Attractions in {title}</h2>
        <Gallery />
      </div>
    </div>
  );
};

const InnerWidgets = () => {
  const [lang] = useContext(Context);
  const [id] = useContext(ContextID);
  const { capital } = getCountryData(lang, id);
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

const InnerMap = () => {
  const [lang] = useContext(Context);
  const [id] = useContext(ContextID);
  const { capital } = getCountryData(lang, id);
  return (
    <div className="inner-map">
      <h2>Location of {capital}</h2>
      <Map id={id} />
    </div>
  );
};

const Country = () => {

  return (
    <div>
      <InnerMain />
      <InnerAbout />
      <InnerVideo />
      <InnerGallery />
      <InnerWidgets />
      <InnerMap />
    </div>
  );
};

export default Country;
