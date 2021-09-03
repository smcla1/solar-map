import React, { useState, useRef, useCallback } from "react";
import styles from "./Map.styl.js";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { withStyles } from "@material-ui/core/styles";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

function Map({ classes, handleSelectedFeatureChange, children }) {
  const onSelect = useCallback((options) => {
    setSelectedFeatureIndex(options && options.selectedFeatureIndex);
  }, []);

  const onDelete = useCallback(() => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
      editorRef.current.deleteFeatures(selectedFeatureIndex);
    }
  }, [selectedFeatureIndex]);

  const onUpdate = useCallback(({ editType }) => {
    console.log("onupdate");
    if (editType === "addFeature") {
      setMode(new EditingMode());
    }
  }, []);
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
