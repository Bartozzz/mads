import { Heap, MaxHeap, MinHeap } from "../src";

describe("mads-heap", () => {
  it("should expose public API", () => {
    expect(Heap).toBeDefined();
    expect(MaxHeap).toBeDefined();
    expect(MinHeap).toBeDefined();
  });
});
