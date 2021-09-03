import * as React from "react";
import { useState } from "react";
import styles from "./Map.styl.js";
import { withStyles } from "@material-ui/core/styles";
import MapGL from "react-map-gl";

function Map({ classes, handleSelectedFeatureChange, children }) {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });

  const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  return (
    <div className={classes.root}>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        {children}
      </MapGL>
    </div>
  );
}

export default withStyles(styles)(Map);
