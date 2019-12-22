import * as constants from "../src";

describe("mads-constants", () => {
  it("should expose constants", () => {
    expect(constants.PI).toBeCloseTo(Math.PI);
    expect(constants.PI180).toBeCloseTo(Math.PI / 180);
    expect(constants.PI180_REV).toBeCloseTo(180 / Math.PI);
    expect(constants.LOG10E).toBeCloseTo(0.4342945);
    expect(constants.LOG2E).toBeCloseTo(1.442695);
  });
});
