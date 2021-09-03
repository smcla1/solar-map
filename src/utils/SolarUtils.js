const SolarUtils = {
    calculateNominalPower: (
    polygonArea,
    efficiency,
    solarRadiation,
    perfRatio
  ) => {
    const r = efficiency;
    const A = polygonArea;
    const H = solarRadiation;
    const PR = perfRatio;
    const nominalPower = Number.parseFloat(A * r * H * PR);
    return nominalPower > 1000000
      ? nominalPower.toExponential(2)
      : nominalPower.toFixed(3);
  },
};

export default SolarUtils;
