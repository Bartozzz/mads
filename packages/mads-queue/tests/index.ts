import { Queue } from "../src";

describe("mads-queue", () => {
  it("exposes the public API", () => {
    const queue = new Queue();

    expect(queue.list).toBeInstanceOf(Array);
    expect(queue.enqueue).toBeInstanceOf(Function);
    expect(queue.dequeue).toBeInstanceOf(Function);
  });

  describe("enqueue", () => {
    let queue: Queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it("should add an element at the last position", () => {
      const payloadA = 1;
      const payloadB = 2;

      queue.enqueue(payloadA);
      queue.enqueue(payloadB);

      expect(queue.list.length).toBe(2);
      expect(queue.list[0]).toBe(payloadA);
      expect(queue.list[1]).toBe(payloadB);
    });
  });

  describe("dequeue", () => {
    let queue: Queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it("should return undefined if no elements at the front terminal position", () => {
      expect(queue.list.length).toBe(0);
      expect(queue.dequeue()).toBeUndefined();
    });

    it("should return and remove the element from the front terminal position", () => {
      const payloadA = 1;
      const payloadB = 2;

      queue.enqueue(payloadA);
      queue.enqueue(payloadB);

      expect(queue.dequeue()).toBe(payloadA);
      expect(queue.dequeue()).toBe(payloadB);
      expect(queue.dequeue()).toBeUndefined();
    });
  });
});
