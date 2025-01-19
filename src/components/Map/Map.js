import React, { useState } from 'react';
import APIs from '../../APIKEYS'
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';
import markersData from './MarkersData';
import './Map.css';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const wrapperStyle = {
  width: '95%',
  height: '65%',
  border: '5px solid #779d70',
  borderRadius: '20px',
  overflow: 'hidden',
  margin: '0 auto',
  boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.2)',
};

const infoBoxOptions = {
  boxStyle: {
    background: "none",
    border: "none",
    boxShadow: "none",
  },
  closeBoxURL: "",
  enableEventPropagation: true, // Allows events to pass through
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allTags = [...new Set(markersData.flatMap(marker => marker.tags))];

  const filteredMarkers = markersData.filter(marker => 
    selectedCategory === "All" || marker.tags.includes(selectedCategory)
  );

  return (
    <div className="map-container">
      <div className="filter">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag.charAt(0).toUpperCase() + tag.slice(1)} {/* Capitalize first letter */}
            </option>
          ))}
        </select>
      </div>
      <br></br>
      <div style={wrapperStyle}>
        <LoadScript googleMapsApiKey={APIs.GoogleMaps}>
          <GoogleMap mapContainerStyle={containerStyle} options={mapOptions} center={vancouver} zoom={11}>
            {filteredMarkers.map((marker) => (
                <Marker
                    key={marker.id}
                    position={marker.position}
                    icon = {(marker.type === "london drugs" ? "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" : (marker.type === "return-it" ? "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png" : "https://maps.google.com/mapfiles/ms/icons/red-dot.png"))}
                    onClick={() => setSelectedMarker(marker)}
                />
                ))}
            {selectedMarker && (
              <InfoBox
                position={selectedMarker.position}
                options={infoBoxOptions}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div className = "info-box">
                  <button className="info-box-close" onClick={() => setSelectedMarker(null)}>✖</button>
                  <h3>{selectedMarker.name}</h3>
                  <a href={'https://www.google.com/maps/dir//' + encodeURIComponent(selectedMarker.address)} target="blank">Directions</a>
                  <p>{selectedMarker.description}</p>
                </div>
              </InfoBox>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;