import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapSection = ({ center, markers }) => {
  const mapContainerStyle = {
    height: "400px",
    width: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    marginTop: "20px"
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCOSDmNbsUcv1hoD4K9kPiFvV7KNuBjgsw">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={{ lat: marker.latitude, lng: marker.longitude }} 
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapSection;
