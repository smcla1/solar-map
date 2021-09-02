import * as React from "react";
import styles from "./ControlPanel.style";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import area from "@turf/area";

function ControlPanel({ classes, polygon }) {
  // const polygon = props.polygon;
  // todo move out
  const polygonArea = polygon && area(polygon);
  console.log(polygon);
  return (
    <div className={classes.root}>

      {/* <Grid container className={classes.container}>
        <Grid item xs={12}> */}
          <Paper elevation={3}>
            {polygon && (
              <p>
                {polygonArea} <br />
                square meters
              </p>
            )}
            <div className="source-link">
              <a
                href="https://github.com/visgl/react-map-gl/tree/6.0-release/examples/draw-polygon"
                target="_new"
              >
                View Code ↗
              </a>
            </div>
          </Paper>
        {/* </Grid>
      </Grid> */}
    </div>
  );
}

export default withStyles(styles)(ControlPanel);
