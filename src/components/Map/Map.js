import * as React from "react";
import { useRef, useState, useCallback } from "react";
import styles from "./Map.styl.js";
import { withStyles } from "@material-ui/core/styles";
import { Editor, DrawPolygonMode, EditingMode } from "react-map-gl-draw";
import { getFeatureStyle, getEditHandleStyle } from "./DrawTools.styl";
import MapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

function Map({ classes, handleSelectedFeatureChange, children }) {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });

  // const [mode, setMode] = useState(null);
  // const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  // const editorRef = useRef(null);

  // const onSelect = useCallback((options) => {
  //   setSelectedFeatureIndex(options && options.selectedFeatureIndex);
  //   handleSelectedFeatureChange();
  // }, []);

  // const onDelete = useCallback(() => {
  //   if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
  //     editorRef.current.deleteFeatures(selectedFeatureIndex);
  //   }
  // }, [selectedFeatureIndex]);

  // const onUpdate = useCallback(({ editType }) => {
  //   console.log('onupdate');
  //   if (editType === "addFeature") {
  //     setMode(new EditingMode());
  //   }
  // }, []);

  // // Ideally this would use consistent styling with the app.
  // const drawTools = (
  //   <div className="mapboxgl-ctrl-top-right">
  //     <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
  //       <button
  //         className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
  //         title="Polygon tool (p)"
  //         onClick={() => setMode(new DrawPolygonMode())}
  //       />
  //       <button
  //         className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
  //         title="Delete"
  //         onClick={onDelete}
  //       />
  //     </div>
  //   </div>
  // );

  // const features = editorRef.current && editorRef.current.getFeatures();
  // const selectedFeature =
  //   features &&
  //   (features[selectedFeatureIndex] || features[features.length - 1]);

  const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  // const geolocateStyle = {
  //   top: 0,
  //   left: 0,
  //   padding: "10px",
  // };

  // const fullscreenControlStyle = {
  //   top: 36,
  //   left: 0,
  //   padding: "10px",
  // };

  // const navStyle = {
  //   top: 72,
  //   left: 0,
  //   padding: "10px",
  // };

  // const scaleControlStyle = {
  //   bottom: 36,
  //   left: 0,
  //   padding: "10px",
  // };

  // console.log('selected feature: ', selectedFeature);

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
        {/* <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
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
        {drawTools} */}
      </MapGL>
    </div>
  );
}

export default withStyles(styles)(Map);
