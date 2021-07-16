import React, { Component, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '350px',
  margin: '10px 10px 10px 0px'
};

const MyGoogleMap = props => {
  const latitude = 45.51702824967326;
  const longitude = -122.67529715580599;

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={16}
      >

        <Marker
          key={ latitude + longitude }
          position={{ lat: latitude, lng: longitude }}
          label={"Open Wide Deli"}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyGoogleMap)