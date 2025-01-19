import React, { useState } from 'react';
import APIs from '../../APIKEYS'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import markersData from './MarkersData';
import './Map.css';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const wrapperStyle = {
  width: '50%',
  height: '500px',
  border: '5px solid #779d70',
  borderRadius: '20px',
  overflow: 'hidden',
  margin: '0 auto',
};

const mapOptions = {
  fullscreenControl: false, // Disable fullscreen control
  streetViewControl: false, // Disable Street View control
  mapTypeControl: false,    // Disable map type (satellite/terrain) control
  scaleControl: false,      // Disable scale control
};

const vancouver = {
    lat: 49.2472,
    lng: -123.1349,
  };

const Map = () => {

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div style={wrapperStyle}>
    <LoadScript googleMapsApiKey={APIs.GoogleMaps}>
      <GoogleMap mapContainerStyle={containerStyle} options={mapOptions} center={vancouver} zoom={11}>
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
    </div>
  );
};

export default Map;