import * as L from 'leaflet';

const customIcon = L.icon({
  iconUrl: '/images/marker.svg',
  iconSize:     [38, 95],
  iconAnchor:   [19, 77]
});

const highlightStyle = {
  fillColor: '#1D2736',
  weight: 1,
  opacity: 1,
  color: '#F2F2F2',
  dashArray: '3',
  fillOpacity: 0.3,
  fill: true
}
const leftCorner = L.latLng(-90, -180);
const rightCorner = L.latLng(90, 180);

const mapBounds = L.latLngBounds(leftCorner, rightCorner);

const accessToken = "JJE7vIIHikRr4Qb1vMCPzKerdDpK3klatPXnDECt8Z81j3FCiSkT2VcK5qer5zv4";
const attribution = '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a>';

export { customIcon, highlightStyle, mapBounds, accessToken, attribution };
