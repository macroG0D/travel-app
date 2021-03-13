import React, {useContext} from 'react';
import ImageGallery from "react-image-gallery/";
import Context from "../context";
import {ATTRACTIONSDE, ATTRACTIONSEN, ATTRACTIONSRU} from "../../data";

const Gallery = ({id}) => {
  const [lang] = useContext(Context);
  const data = (lang === 'en') ? ATTRACTIONSEN : (lang === 'ru') ? ATTRACTIONSRU : ATTRACTIONSDE;
  const infoGallery  = data[id]['info-gallery'];
  const srcImage = `/images/${id}`;
  console.log(infoGallery);


  const images = infoGallery.map(({name, description}, ind) => {
    return {
      thumbnail: `${srcImage}/${ind}.jpg`,
      original: `${srcImage}/${ind}.jpg`,
      // description: description,
      originalAlt:name,
      thumbnailAlt:name,
    }
  })

  return <ImageGallery
    items={images}
    thumbnailPosition='right'
    showPlayButton={false}
    showBullets={true}
  />;
};

export default Gallery;
