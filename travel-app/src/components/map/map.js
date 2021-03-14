import React, { useEffect, useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, ScaleControl } from 'react-leaflet';
import * as L from 'leaflet';
import ATTRACTIONS from '../../data/ATTRACTIONSEN.json';
import geoJSON from '../../data/geoJSON.json';
import { Context } from "../context";

const transformGeoJSON = (title) =>  {
  const features = geoJSON.features.filter((({ properties }) => properties.name === title));
  const countryGeoJSON = { ...geoJSON, features };

  return countryGeoJSON;
}

const Map = ({ id }) => {
  const { title, coordinates, capital } = ATTRACTIONS[id];

  const accessToken = "JJE7vIIHikRr4Qb1vMCPzKerdDpK3klatPXnDECt8Z81j3FCiSkT2VcK5qer5zv4";
  const attribution = '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a>';
  
  const countryData = transformGeoJSON(title);
  
  const pathOptions = {
    fillColor: '#800026',
    weight: 1,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.5,
    fill: true
  }
  
	const [lang] = useContext(Context);
  const startUrl = `https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?lang=${lang}&access-token=${accessToken}`;
  
  const [tile, setTile] = useState();
  const [map, setMap] = useState();

  useEffect(() => {
    if (tile) {
      tile.setUrl(`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?lang=${lang}&access-token=${accessToken}`);
    }
  }, [lang, tile]);

  useEffect(() => {
    const { coordinates } = ATTRACTIONS[id]; 

    if (map) {
      map.setView(coordinates);
    }
  }, [id, map]);

  const leftCorner = L.latLng(-90, -180);
  const rightCorner = L.latLng(90, 180);
  const bounds = L.latLngBounds(leftCorner, rightCorner)
  
  return (
    <div className="map" id="map">
      <MapContainer center={coordinates} zoom={4} minZoom={3} scrollWheelZoom={true} maxBounds={bounds} whenCreated={setMap}>

        <TileLayer
          ref={setTile}
          attribution={attribution}
          url={startUrl}
        />

        <GeoJSON data={countryData} pathOptions={pathOptions}/>

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