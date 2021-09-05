import React from "react";
import styles from "./DrawTools.styl.js";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { withStyles } from "@material-ui/core/styles";

function Map({ onDelete, onStartEditing }) {
  return (
    <div className="mapboxgl-ctrl-top-left">
      <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
        <button
          className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
          title="Polygon tool (p)"
          onClick={onStartEditing}
        />
        <button
          className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
          title="Delete"
          onClick={onDelete}
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(Map);
