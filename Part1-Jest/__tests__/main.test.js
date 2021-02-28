const formatVolumeIconPath = require("../assets/scripts/main");

describe('volume icon', () => {
  test('volume3', () => {
    expect(formatVolumeIconPath(67)).toMatch("./assets/media/icons/volume-level-3.svg");
  });

  test('volume2', () => {
    expect(formatVolumeIconPath(34)).toMatch("./assets/media/icons/volume-level-2.svg");
  });

  test('volume1', () => {
    expect(formatVolumeIconPath(1)).toMatch("./assets/media/icons/volume-level-1.svg");
  });

  test('volume0', () => {
    expect(formatVolumeIconPath(0)).toMatch("./assets/media/icons/volume-level-0.svg");
  });
});