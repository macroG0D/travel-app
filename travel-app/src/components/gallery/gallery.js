import React, { useContext, useState, useEffect } from 'react';
import Fullscreen from 'fullscreen-react';
import ImageGallery from 'react-image-gallery/';
import { Context, ContextID } from '../context';
import { ATTRACTIONSDE, ATTRACTIONSEN, ATTRACTIONSRU } from '../../data';

const Gallery = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [lang] = useContext(Context);
  const [id] = useContext(ContextID);
  const ATTRACTION =
    lang === 'en'
      ? ATTRACTIONSEN
      : lang === 'ru'
      ? ATTRACTIONSRU
      : ATTRACTIONSDE;
  const srcImage = `/images/${id}`;

  const [data, setData] = useState(ATTRACTION);
  const [idImg, setIdImg] = useState(0);

  const infoGallery = data[id]['info-gallery'];
  const { name, description } = infoGallery[idImg];
  const images = infoGallery.map(({ name }, ind) => {
    return {
      thumbnail: `${srcImage}/${ind}.jpg`,
      original: `${srcImage}/${ind}.jpg`,
      originalAlt: name,
      thumbnailAlt: name,
    };
  });

  useEffect(() => {
    const data =
      lang === 'en'
        ? ATTRACTIONSEN
        : lang === 'ru'
        ? ATTRACTIONSRU
        : ATTRACTIONSDE;
    setData(data);
  }, [lang]);

  const setDescription = (id) => {
    setIdImg(id);
  };

  const setFull = () => {
    setIsEnter((isEnter) => !isEnter);
  };

  const FullscreenBtn = ({setFull}) => {
    const img = isEnter? 'exit-full' : 'full';
    return (
      <img className='full' src={`/images/${img}.png`} alt="fullscreen"
           role="button"
           onClick={setFull} />
    )
  };

  return (
    <Fullscreen isEnter={isEnter} onChange={setIsEnter} >

    <div className="gallery">

      <div className="gallery__content">
        <span className="gallery__title">{name}</span>
        <ImageGallery
          items={images}
          thumbnailPosition="right"
          showPlayButton={false}
          showBullets={true}
          onSlide={setDescription}
          startIndex={idImg}
          showFullscreenButton={false}
        />
        <FullscreenBtn
          setFull={setFull} />
        <div className="gallery__description">{description}</div>
      </div>

    </div>
    </Fullscreen >

  );
};

export default Gallery;
