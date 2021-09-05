import * as React from "react";
import styles from "./PowerDetail.style";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// A reusable component for displaying details/variables used in calculation.
function PowerMeter({ measurement, value, units }) {
  return (
    <>
      <Grid item xs={12}>
        <Typography display="inline" variant="body2" color="textPrimary">
          {measurement}:{" "}
        </Typography>
        <Typography display="inline" color="secondary">
          <strong>{value}</strong>
        </Typography>{" "}
        <Typography display="inline" color="textSecondary">
          {units}
        </Typography>
      </Grid>
    </>
  );
}

export default withStyles(styles)(PowerMeter);
