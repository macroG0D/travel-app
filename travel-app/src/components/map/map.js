import React, { useEffect, useState, useContext, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, ScaleControl, useMap } from 'react-leaflet';
import * as L from 'leaflet';
import ATTRACTIONS from '../../data/ATTRACTIONS.json';
import geoJSON from '../../data/geoJSON.json';
// import Context from "../context";

const transformGeoJSON = (title) =>  {
  const features = geoJSON.features.filter((({ properties }) => properties.name === title));
  const countryGeoJSON = { ...geoJSON, features };

  return countryGeoJSON;
}

const Map = ({ id }) => {
  const { title, coordinates, capital } = ATTRACTIONS[id];

  const accessToken = "JJE7vIIHikRr4Qb1vMCPzKerdDpK3klatPXnDECt8Z81j3FCiSkT2VcK5qer5zv4";
  const attribution = '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a>';
  
  const selectedCountry = transformGeoJSON(title);
  
  const pathOptions = {
    fillColor: '#800026',
    weight: 1,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.5,
    fill: true
  }
  
  // раскомментировать, когда будет добавлен Context
	// const [lang] = useContext(Context);
  const lang = 'en'; //  удалить, когда будет добавлен Context
  
  const startUrl = `https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?lang=${lang}&access-token=${accessToken}`;

  const ChangeView = () => {
    const map = useMap();
    map.setView(coordinates);
    return null
  }

  const leftCorner = L.latLng(-90, -180);
  const rightCorner = L.latLng(90, 180);
  const bounds = L.latLngBounds(leftCorner, rightCorner)

  return (
    <div className="map" id="map">
      <MapContainer center={coordinates} zoom={4} minZoom={3} scrollWheelZoom={true} maxBounds={bounds}>

        <TileLayer
          attribution={attribution}
          url={startUrl}
        />

        <ChangeView/>

        <GeoJSON data={selectedCountry} pathOptions={pathOptions}/>

        <ScaleControl/>

        <Marker position={coordinates}>
          <Popup>
            {capital}
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  )
}

export default Map;