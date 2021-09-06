const SolarUtils = {
  calculateNominalPower: (
    polygonArea,
    efficiency,
    solarRadiation,
    perfRatio
  ) => {
    // Variables used for nominal power calculation
    const r = efficiency;
    const A = polygonArea;
    const H = solarRadiation;
    const PR = perfRatio;

    // Get nominal power in kWh
    const nominalPowerKWH = Number.parseFloat(A * r * H * PR);

    // Format value and return
    return nominalPowerKWH > 1000000
      ? // Use scientific notation
      nominalPowerKWH.toExponential(2)
      : // Fix decimals to 3 places
      nominalPowerKWH.toFixed(3);
  },
};

export default SolarUtils;
