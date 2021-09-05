export const mockMapOn = jest.fn();
export const mockMapRemove = jest.fn();

// Setup a mock of mapbox-gl for testing
// https://github.com/mapbox/mapbox-gl-js/issues/10583
jest.mock('mapbox-gl', () => ({
  Map: function () {
    this.on = mockMapOn;
    this.remove = mockMapRemove;
  }
}));
