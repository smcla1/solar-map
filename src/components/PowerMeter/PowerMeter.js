import * as React from "react";
import styles from "./PowerMeter.style";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import PowerDetail from "../PowerDetail/PowerDetail";
import SolarUtils from "../../utils/SolarUtils";
import area from "@turf/area";

function PowerMeter({
  classes,
  polygon,
  solarRadiation,
  perfRatio,
  efficiency,
}) {
  const polygonArea = (polygon && area(polygon)) || 0;
  return (
    <>
      <Card className={classes.controls}>
        <CardContent>
          <Grid container spacing={0} justifyContent="center">
            <Grid item  md={7}>
              <Box display={{ xs: "none", sm: "none", md: "block" }}>
                <Grid container>
                  <PowerDetail
                    measurement={"PV AREA"}
                    value={
                      polygonArea > 1000000
                        ? polygonArea.toExponential(2)
                        : polygonArea.toFixed(3)
                    }
                    units={
                      <>
                        {"m"}
                        <sup>2</sup>
                      </>
                    }
                  />
                  <PowerDetail
                    measurement={"YIELD"}
                    value={efficiency}
                    units={"%"}
                  />
                  <PowerDetail
                    measurement={"AVG RADIATION"}
                    value={solarRadiation}
                    units={
                      <>
                        {"w/m"}
                        <sup>2</sup>
                      </>
                    }
                  />
                  <PowerDetail
                    measurement={"PERFORMANCE RATIO"}
                    value={perfRatio}
                    units={""}
                  />
                </Grid>
                
              </Box>
              
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Grid container spacing={1} justifyContent="flex-start">
                <Grid item xs={12}>
                  <Typography noWrap={true} variant="h6" color="textPrimary">
                    {"NOMINAL POWER"}
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography display="inline" variant="h3" color="primary">
                    {SolarUtils.calculateNominalPower(
                      polygonArea,
                      efficiency,
                      solarRadiation,
                      perfRatio
                    )}
                  </Typography>
                  <Typography
                    display="inline"
                    color="textSecondary"
                    variant="subtitle2"
                  >
                    kWh
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
