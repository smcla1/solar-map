const SolarUtils = {
  calculateNominalPowerByArea: (area) => {
    const r = 17;
    const A = area;
    const H = 1000;
    const PR = 0.75;
    const nominalPower = Number.parseFloat(A * r * H * PR);
    return nominalPower > 1000000
      ? nominalPower.toExponential(2)
      : nominalPower.toFixed(3);
  },
};

export default SolarUtils;
