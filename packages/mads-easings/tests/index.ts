import * as easings from "../src";

describe("mads-easings", () => {
  it("should expose easing functions", () => {
    expect(easings.easeIn).toBeInstanceOf(Function);
    expect(easings.easeOut).toBeInstanceOf(Function);
    expect(easings.easeInOut).toBeInstanceOf(Function);
    expect(easings.linear).toBeInstanceOf(Function);
    expect(easings.easeInQuad).toBeInstanceOf(Function);
    expect(easings.easeOutQuad).toBeInstanceOf(Function);
    expect(easings.easeInOutQuad).toBeInstanceOf(Function);
    expect(easings.easeInCubic).toBeInstanceOf(Function);
    expect(easings.easeOutCubic).toBeInstanceOf(Function);
    expect(easings.easeInOutCubic).toBeInstanceOf(Function);
    expect(easings.easeInQuart).toBeInstanceOf(Function);
    expect(easings.easeOutQuart).toBeInstanceOf(Function);
    expect(easings.easeInOutQuart).toBeInstanceOf(Function);
    expect(easings.easeInQuint).toBeInstanceOf(Function);
    expect(easings.easeOutQuint).toBeInstanceOf(Function);
    expect(easings.easeInOutQuint).toBeInstanceOf(Function);
    expect(easings.easeInSin).toBeInstanceOf(Function);
    expect(easings.easeOutSin).toBeInstanceOf(Function);
    expect(easings.easeInOutSin).toBeInstanceOf(Function);
  });
});
