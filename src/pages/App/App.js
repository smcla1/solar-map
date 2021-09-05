import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Map from "../../components/Map/Map";
import PowerMeter from "../../components/PowerMeter/PowerMeter";
import SolarConstants from "../../constants/SolarConstants";
import styles from "./App.styl.js";

function App() {
  // Constants for nominal power calculation.
  const [efficiency] = useState(SolarConstants.EFFICIENCY);
  const [solarRadiation] = useState(SolarConstants.SOLAR_RADIATION);
  const [perfRatio] = useState(SolarConstants.PERFORMANCE_RATIO);

  const [selectedFeature, setSelectedFeature] = useState();

  // Handle user selection of features.
  const handleSelectedFeatureChange = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      <Map onSelectedFeatureChange={handleSelectedFeatureChange} />
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
