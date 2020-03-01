import * as easing from "../src";

describe("mads-easing", () => {
  it("should expose easing functions", () => {
    expect(easing.easeIn).toBeInstanceOf(Function);
    expect(easing.easeOut).toBeInstanceOf(Function);
    expect(easing.easeInOut).toBeInstanceOf(Function);
    expect(easing.linear).toBeInstanceOf(Function);
    expect(easing.easeInQuad).toBeInstanceOf(Function);
    expect(easing.easeOutQuad).toBeInstanceOf(Function);
    expect(easing.easeInOutQuad).toBeInstanceOf(Function);
    expect(easing.easeInCubic).toBeInstanceOf(Function);
    expect(easing.easeOutCubic).toBeInstanceOf(Function);
    expect(easing.easeInOutCubic).toBeInstanceOf(Function);
    expect(easing.easeInQuart).toBeInstanceOf(Function);
    expect(easing.easeOutQuart).toBeInstanceOf(Function);
    expect(easing.easeInOutQuart).toBeInstanceOf(Function);
    expect(easing.easeInQuint).toBeInstanceOf(Function);
    expect(easing.easeOutQuint).toBeInstanceOf(Function);
    expect(easing.easeInOutQuint).toBeInstanceOf(Function);
    expect(easing.easeInSin).toBeInstanceOf(Function);
    expect(easing.easeOutSin).toBeInstanceOf(Function);
    expect(easing.easeInOutSin).toBeInstanceOf(Function);
  });
});
