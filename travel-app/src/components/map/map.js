import React, { useEffect, useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, GeoJSON, ScaleControl } from 'react-leaflet';

import { Context } from "../context";
import ATTRACTIONS from '../../data/ATTRACTIONSEN.json';
import { customIcon, mapBounds, highlightStyle, accessToken, attribution } from './customSettings';
import transformGeoJSON from './transformGeoJSON';

const DEFAULT_X = 0;
const EMPTY_STR = '';

const Map = ({ id }) => {
  const { title, coordinates } = ATTRACTIONS[id];
  const countryGeoJSON = transformGeoJSON(title);

	const [lang] = useContext(Context);
  const [tile, setTile] = useState();
  const [fullscreen, setFullscreen] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (tile) {
      const url = `https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?lang=${lang}&access-token=${accessToken}`;
      tile.setUrl(url);
    }
  }, [lang, tile]);

  useEffect(() => {
    if (map && fullscreen !== null) {
      map.invalidateSize();

      const downPosition = document.body.clientHeight;
      window.scrollTo(DEFAULT_X, downPosition);
      document.body.style.overflow = fullscreen ? 'hidden' : 'visible';
    }
  }, [fullscreen, map])

  useEffect(() => () => {
    document.body.style.overflow = 'visible';
  }, []);

  const onFullscreen = () => {
    setFullscreen(() => !fullscreen);
  }

  const clazz = fullscreen ? 'map--fullscreen' : EMPTY_STR;

  return (
    <div className={`map ${clazz}`} id="map">
      <button className="map__fullscreen-button" type="button" onClick={onFullscreen}>
        <img src="/images/fullscreen.svg" alt="full-screen"/>
      </button>
      <MapContainer center={coordinates} zoom={4} minZoom={3} scrollWheelZoom={true} maxBoundsViscosity={1} maxBounds={mapBounds} whenCreated={setMap}>

        <TileLayer
          ref={setTile}
          attribution={attribution}
          url={EMPTY_STR}
        />

        <GeoJSON data={countryGeoJSON} pathOptions={highlightStyle}/>

        <ScaleControl/>

        <Marker position={coordinates} icon={customIcon}></Marker>

      </MapContainer>
    </div>
  )
}

export default Map;
