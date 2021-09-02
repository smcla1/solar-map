import * as React from 'react';
import {useState} from 'react';
import styles from "./App.styl.js";
import { withStyles } from '@material-ui/core/styles';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import MapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

function App({ classes }) {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });

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
        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>

      <ControlPanel />
    </div>
  );
}

export default withStyles(styles)(App);