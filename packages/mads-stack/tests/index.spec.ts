import { Stack } from "../src";

describe("mads-stack", () => {
  describe("push", () => {
    let stack: Stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it("should add an element at the last position", () => {
      const payloadA = 1;
      const payloadB = 2;

      stack.push(payloadA);
      stack.push(payloadB);

      expect(stack.list.length).toBe(2);
      expect(stack.list[0]).toBe(payloadA);
      expect(stack.list[1]).toBe(payloadB);
    });
  });

  describe("pop", () => {
    let stack: Stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it("should return undefined if no elements at the back terminal position", () => {
      expect(stack.list.length).toBe(0);
      expect(stack.pop()).toBeUndefined();
    });

    it("should return and remove the element from the back terminal position", () => {
      const payloadA = 1;
      const payloadB = 2;

      stack.push(payloadA);
      stack.push(payloadB);

      expect(stack.pop()).toBe(payloadB);
      expect(stack.pop()).toBe(payloadA);
      expect(stack.pop()).toBeUndefined();
    });
  });
});
