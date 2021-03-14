import React, { useContext, useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery/';
import { Context, ContextID } from '../context';
import { ATTRACTIONSDE, ATTRACTIONSEN, ATTRACTIONSRU } from '../../data';

const Gallery = () => {
  const [lang] = useContext(Context);
  const id = useContext(ContextID);
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
  const images = infoGallery.map(({ name, description }, ind) => {
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

  return (
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
        />
        <div className="gallery__description">{description}</div>
      </div>
    </div>
  );
};

export default Gallery;
