import React, { useState } from 'react';
import APIs from '../../APIKEYS'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import markersData from './MarkersData';

const containerStyle = {
  width: '40%',
  height: '500px',
  margin: 'auto',
};

const vancouver = {
    lat: 49.2472,
    lng: -123.1304,
  };

const Map = () => {

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <LoadScript googleMapsApiKey={APIs.GoogleMaps}>
      <GoogleMap mapContainerStyle={containerStyle} center={vancouver} zoom={12}>
        {markersData.map((marker) => (
            <Marker
                key={marker.id}
                position={marker.position}
                icon = {(marker.type === "london drugs" ? "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" : (marker.type === "return-it" ? "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png" : "https://maps.google.com/mapfiles/ms/icons/red-dot.png"))}
                onClick={() => setSelectedMarker(marker)}
            />
            ))}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)} // Close the InfoWindow
          >
            <div className = "info-window">
              <h4>{selectedMarker.name}</h4>
              <a href={'https://www.google.com/maps/dir//' + encodeURIComponent(selectedMarker.address)} target="blank">Directions</a>
              <p>{selectedMarker.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;