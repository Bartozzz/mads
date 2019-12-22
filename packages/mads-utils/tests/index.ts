import * as utils from "../src";

describe("mads-utils", () => {
  it("utils.sign", () => {
    expect(utils.sign(5)).toBe(1);
    expect(utils.sign(-5)).toBe(-1);
    expect(utils.sign(0)).toBe(NaN);
  });

  it("utils.isPowerOfTwo", () => {
    expect(utils.isPowerOfTwo(Math.pow(2, 0))).toBe(true);

    for (let i = 1; i < 10; i++) {
      expect(utils.isPowerOfTwo(Math.pow(2, i))).toBe(true);
    }

    for (let i = 1; i < 10; i++) {
      expect(utils.isPowerOfTwo(Math.pow(3, i))).toBe(false);
    }
  });

  it("utils.toDegrees", () => {
    expect(utils.toDegrees(Math.PI / 2)).toBeCloseTo(90);
    expect(utils.toDegrees(Math.PI)).toBeCloseTo(180);
    expect(utils.toDegrees((3 * Math.PI) / 2)).toBeCloseTo(270);
    expect(utils.toDegrees(2 * Math.PI)).toBeCloseTo(360);
  });

  it("utils.toRadians", () => {
    expect(utils.toRadians(90)).toBeCloseTo(Math.PI / 2);
    expect(utils.toRadians(180)).toBeCloseTo(Math.PI);
    expect(utils.toRadians(270)).toBeCloseTo((3 * Math.PI) / 2);
    expect(utils.toRadians(360)).toBeCloseTo(2 * Math.PI);
  });

  it("utils.randomInt", () => {
    for (let i = 0; i < 1000; i++) {
      const a = utils.randomInt(5, 15);
      expect(a).toBeGreaterThanOrEqual(5);
      expect(a).not.toBeGreaterThan(15);
    }
  });

  it("utils.randomFloat", () => {
    for (let i = 0; i < 1000; i++) {
      const a = utils.randomFloat(5, 6);
      expect(a).toBeGreaterThanOrEqual(5);
      expect(a).not.toBeGreaterThan(6);
    }
  });

  it("utils.clamp", () => {
    expect(utils.clamp(0, 0, 100)).toBe(0);
    expect(utils.clamp(50, 0, 100)).toBe(50);
    expect(utils.clamp(100, 0, 100)).toBe(100);
    expect(utils.clamp(-100, 0, 100)).toBe(0);
    expect(utils.clamp(1000, 0, 100)).toBe(100);
  });

  it("utils.lerp", () => {
    expect(utils.lerp(0, 100, 0)).toBe(0);
    expect(utils.lerp(0, 100, 0.25)).toBe(25);
    expect(utils.lerp(0, 100, 0.5)).toBe(50);
    expect(utils.lerp(0, 100, 0.75)).toBe(75);
    expect(utils.lerp(0, 100, 1)).toBe(100);
  });
});
