import React, { useContext } from 'react';
import VideoPlayer from '../../components/video-player';
import DateBlock from '../../components/date-block';
import ExchangeRates from '../../components/exchange-rates';
import Weather from '../../components/weather';
import Map from '../../components/map';
import Gallery from '../../components/gallery';
import { ATTRACTIONSDE, ATTRACTIONSEN, ATTRACTIONSRU } from '../../data';

import { Context } from '../../components/context';
import localization from '../../data/localization.json';

const getCountryData = (lang, id) => {
  const ATTRACTION =
    lang === 'en'
      ? ATTRACTIONSEN
      : lang === 'ru'
      ? ATTRACTIONSRU
      : ATTRACTIONSDE;
  return ATTRACTION[id];
};

const InnerMain = ({ id }) => {
  const [lang] = useContext(Context);
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

const InnerAbout = ({ id }) => {
  const [lang] = useContext(Context);
  const { info } = getCountryData(lang, id);
  return (
    <div className="inner-about">
      <p className="inner-about__description">{info}</p>
    </div>
  );
};

const InnerVideo = ({ id }) => {
  const [lang] = useContext(Context);
  const { title } = getCountryData(lang, id);
  const {video} = getCountryData('en', id);
  return (
    <div className="inner-video">
      <h2>{`${localization[lang].about}, ${title}`}</h2>
      <VideoPlayer countryURL={video} />
    </div>
  );
};

const InnerGallery = ({ id }) => {
  const [lang] = useContext(Context);
  const { title } = getCountryData(lang, id);
  return (
    <div className="inner-gallery">
      <div className="inner-gallery__content">
        <h2>{`${localization[lang].attractions}, ${title}`}</h2>
        <Gallery id={id} />
      </div>
    </div>
  );
};

const InnerWidgets = ({ id }) => {
  const [lang] = useContext(Context);
  const { capital } = getCountryData(lang, id);
  return (
    <div className="inner-widgets">
      <div className="inner-widgets__content">
        <h2 className="inner-widgets__header">{`${localization[lang].info}, ${capital}`}</h2>
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
  const [lang] = useContext(Context);
  const { capital } = getCountryData(lang, id);
  return (
    <div className="inner-map">
      <h2>{`${localization[lang].location}, ${capital}`}</h2>
      <Map id={id} />
    </div>
  );
};

const Country = ({ id }) => {
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
