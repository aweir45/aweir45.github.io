import { LatLngExpression } from 'leaflet';
import React, { useEffect } from 'react'
import { MapContainer,TileLayer } from 'react-leaflet';
import 'leaflet-gpx';
import { parser } from './Parser';

export const Map = () => {
    const position: LatLngExpression = [54.17550, -7.50504]; // Latitude, Longitude
    return(
        <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100vh', width: '100%' }} // Set the size of the map
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add a Marker at the defined position */}
        {/* <Marker position={position}>
          <Popup>
            You are here: <br /> 54.17550, -7.50504
          </Popup>
        </Marker> */}
      </MapContainer>
    )
}