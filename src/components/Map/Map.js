import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "./Map.styl.js";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { withStyles } from "@material-ui/core/styles";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import OverlayStyles from "./OverlayStyles";

import { Editor, DrawPolygonMode, EditingMode } from "react-map-gl-draw";
import {
  getFeatureStyle,
  getEditHandleStyle,
} from "../../components/Map/DrawTools.styl";
import {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

function Map({ classes, onSelectedFeatureChange }) {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });

  const [mode, setMode] = useState(null);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  const editorRef = useRef(null);
  const features = editorRef.current && editorRef.current.getFeatures();

  const handleFeatureChange = useCallback(() => {
    const selectedFeature =
      features &&
      (features[selectedFeatureIndex] || features[features.length - 1]);
    console.log("handle sel feature change: ", selectedFeature);
    onSelectedFeatureChange(selectedFeature);
  }, [features, onSelectedFeatureChange, selectedFeatureIndex]);

  const onSelect = useCallback(
    (options) => {
      setSelectedFeatureIndex(options && options.selectedFeatureIndex);
      handleFeatureChange();
    },
    [handleFeatureChange]
  );

  const onDelete = useCallback(() => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
      editorRef.current.deleteFeatures(selectedFeatureIndex);
      handleFeatureChange();
    }
  }, [selectedFeatureIndex, handleFeatureChange]);

  const onUpdate = ({ editType }) => {
    if (editType === "addFeature") {
      setMode(new EditingMode());
      handleFeatureChange();
    }
  };

  // Ideally this would use consistent styling with the app.
  const drawTools = (
    <div className="mapboxgl-ctrl-top-left">
      <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
        <button
          className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
          title="Polygon tool (p)"
          onClick={() => setMode(new DrawPolygonMode())}
        />
        <button
          className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
          title="Delete"
          onClick={onDelete}
        />
      </div>
    </div>
  );

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
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <div className={classes.root}>
      <MapGL
        {...viewport}
        ref={mapRef}
        width="100%"
        height="100%"
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-right"
        />
        <GeolocateControl style={OverlayStyles.geolocateStyle} />
        <FullscreenControl style={OverlayStyles.fullscreenControlStyle} />
        <NavigationControl style={OverlayStyles.navStyle} />
        <ScaleControl style={OverlayStyles.scaleControlStyle} />
        <Editor
          ref={editorRef}
          style={{ width: "100%", height: "100%" }}
          clickRadius={12}
          mode={mode}
          onSelect={onSelect}
          onUpdate={onUpdate}
          editHandleShape={"circle"}
          featureStyle={getFeatureStyle}
          editHandleStyle={getEditHandleStyle}
        />
        {drawTools}
      </MapGL>
    </div>
  );
}

export default withStyles(styles)(Map);
