import * as React from "react";
import { useRef, useState, useCallback } from "react";
import Map from "../../components/Map/Map";
import PowerMeter from "../../components/PowerMeter/PowerMeter";
import { withStyles } from "@material-ui/core/styles";
import styles from "./App.styl.js";
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


function App() {
  const [mode, setMode] = useState(null);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);

  // Variables for nominal power calculation.
  const [efficiency, setEfficiency] = useState(17);
  const [solarRadiation, setSolarRadiation] = useState(1000);
  const [perfRatio, setPerfRatio] = useState(0.75);

  const editorRef = useRef(null);
  

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

  const features = editorRef.current && editorRef.current.getFeatures();
  const selectedFeature =
    features &&
    (features[selectedFeatureIndex] || features[features.length - 1]);

  const geolocateStyle = {
    top: 100,
    left: 0,
    padding: "10px",
  };

  const fullscreenControlStyle = {
    top: 140,
    left: 0,
    padding: "10px",
  };

  const navStyle = {
    top: 180,
    left: 0,
    padding: "10px",
  };

  const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: "10px",
  };

  return (
    <>
      <Map >

        <GeolocateControl style={geolocateStyle} />
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
        {drawTools}
      </Map>
      <PowerMeter
        polygon={selectedFeature}
        efficiency={efficiency}
        perfRatio={perfRatio}
        solarRadiation={solarRadiation}
      />
    </>
  );
}

export default withStyles(styles)(App);
