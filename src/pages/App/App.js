import * as React from "react";
import { useState } from "react";
import Map from "../../components/Map/Map";
import PowerMeter from "../../components/PowerMeter/PowerMeter";
import { withStyles } from "@material-ui/core/styles";
import styles from "./App.styl.js";

function App() {
  // Variables for nominal power calculation.
  const [efficiency] = useState(17);
  const [solarRadiation] = useState(1000);
  const [perfRatio] = useState(0.75);

  const [selectedFeature, setSelectedFeature] = useState();

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
