import { LatLngExpression } from 'leaflet';
import React, { useEffect } from 'react'
import { MapContainer,Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet-gpx';
import GPX from '../assets/map1.gpx'
import way from '../assets/waypointA.gpx'


const GPXLayer: React.FC<{ url: string }> = ({ url }) => {
    const map = useMap();
  
    useEffect(() => {
      // Load the GPX file and add it to the map
      const gpx = new (window as any).L.GPX(url, {
        async: true,
        marker_options: {
          startIconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          endIconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        }
      }).on('loaded', function(e: any) {
        map.fitBounds(e.target.getBounds());
      }).addTo(map);
      
      return () => {
        // Remove GPX layer when component unmounts
        map.removeLayer(gpx);
      };
    }, [map, url]);

    return null;
  };

  
export const Map = () => {
    const position: LatLngExpression = [54.17550, -7.50504]; // Latitude, Longitude
    return(
        <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100vh', width: '100%' }} // Set the size of the map
      >
        {/* Add a TileLayer, which is the map's background */}
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
        {/* <GPXLayer url={GPX}/> */}
        <GPXLayer url={way}/>
      </MapContainer>
    )
}

