import * as React from "react";
import styles from "./PowerMeter.style";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import SolarUtils from "../../utils/SolarUtils";
import area from "@turf/area";

function PowerMeter({ classes, polygon }) {
  const polygonArea = (polygon && area(polygon)) || 0;
  return (
    <>
      <Card className={classes.controls}>
        <CardContent>
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={7}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary">
                    {"Area"}: <strong>{polygonArea}</strong>
                    {"m"}
                    <sup>2</sup>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  <Typography variant="h5" color="textSecondary">
                    {"NOMINAL POWER"}
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h2" color="primary">
                    {SolarUtils.calculateNominalPowerByArea(
                      polygonArea
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography color="textSecondary" variant="subtitle2">
                    kW
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default withStyles(styles)(PowerMeter);
