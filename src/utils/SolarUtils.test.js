import SolarUtils from "./SolarUtils";

it("calculates nominal power", () => {
  const polygonArea = 30;
  const efficiency = 17;
  const solarRadiation = 1000;
  const perfRatio = 0.75;
  const nomPower = SolarUtils.calculateNominalPower(
    polygonArea,
    efficiency,
    solarRadiation,
    perfRatio
  );

  expect(Number.parseFloat(nomPower)).toEqual(
    polygonArea * efficiency * solarRadiation * perfRatio
  );
});
