const SolarUtils = {
    calculateNominalPowerByArea: (area) => {
        const r = 17;
        const A = area;
        const H = 1000;
        const PR = 0.75;
        return (A * r * H * PR);
    }
};

export default SolarUtils;