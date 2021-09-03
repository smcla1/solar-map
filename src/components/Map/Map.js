import React, { useState, useRef, useCallback } from "react";
import styles from "./Map.styl.js";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { withStyles } from "@material-ui/core/styles";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

function Map({ classes, handleSelectedFeatureChange, children }) {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );

  const geocoderStyle = {
    bottom: 50,
    left: 50,
    padding: "10px",
  };
  

  return (
    <div className={classes.root}>
      <MapGL
        {...viewport}
        ref={mapRef}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-right"
          style={geocoderStyle}
        />
        {children}
      </MapGL>
    </div>
  );
}

export default withStyles(styles)(Map);
