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

    // Perform calculation
    const nominalPower = Number.parseFloat(A * r * H * PR);

    // Format value and return
    return nominalPower > 1000000
      ? // Use scientific notation
        nominalPower.toExponential(2)
      : // Fix decimals to 3 places
        nominalPower.toFixed(3);
  },
};

export default SolarUtils;
