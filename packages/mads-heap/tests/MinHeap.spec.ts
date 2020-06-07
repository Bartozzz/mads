import { MinHeap } from "../src";

describe("mads-heap – MinHeap class", () => {
  describe("constructor", () => {
    it("should create an empty max heap", () => {
      const heap = new MinHeap();

      expect(heap).toBeDefined();
      expect(heap.length).toBe(0);
      expect(heap.isEmpty).toBe(true);
    });

    it("should create an max heap based on passed argument", () => {
      const payload = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
      const heap = new MinHeap(payload);

      expect(heap).toBeDefined();
      expect(heap.length).toBe(payload.length);
      expect(heap.isEmpty).toBe(false);
      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4, 7, 9, 10, 14, 8, 16)");
    });
  });

  describe("parent", () => {
    it("should return valid index if leaf has a parent", () => {
      const heap = new MinHeap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      expect(heap.parent(10)).toBe(4);
      expect(heap.parent(9)).toBe(4);
      expect(heap.parent(8)).toBe(3);
      expect(heap.parent(7)).toBe(3);
      expect(heap.parent(6)).toBe(2);
      expect(heap.parent(5)).toBe(2);
      expect(heap.parent(4)).toBe(1);
      expect(heap.parent(3)).toBe(1);
      expect(heap.parent(2)).toBe(0);
      expect(heap.parent(1)).toBe(0);
      expect(heap.parent(0)).toBeUndefined();
    });
  });

  describe("left", () => {
    it("should return valid index if leaf has a left children", () => {
      const heap = new MinHeap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      expect(heap.left(10)).toBeUndefined();
      expect(heap.left(9)).toBeUndefined();
      expect(heap.left(8)).toBeUndefined();
      expect(heap.left(7)).toBeUndefined();
      expect(heap.left(6)).toBeUndefined();
      expect(heap.left(5)).toBeUndefined();
      expect(heap.left(4)).toBe(9);
      expect(heap.left(3)).toBe(7);
      expect(heap.left(2)).toBe(5);
      expect(heap.left(1)).toBe(3);
      expect(heap.left(0)).toBe(1);
    });
  });

  describe("right", () => {
    it("should return valid index if leaf has a right children", () => {
      const heap = new MinHeap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      expect(heap.right(10)).toBeUndefined();
      expect(heap.right(9)).toBeUndefined();
      expect(heap.right(8)).toBeUndefined();
      expect(heap.right(7)).toBeUndefined();
      expect(heap.right(6)).toBeUndefined();
      expect(heap.right(5)).toBeUndefined();
      expect(heap.right(4)).toBe(10);
      expect(heap.right(3)).toBe(8);
      expect(heap.right(2)).toBe(6);
      expect(heap.right(1)).toBe(4);
      expect(heap.right(0)).toBe(2);
    });
  });

  describe("min", () => {
    it("should return the index of the lowest child of a leaf", () => {
      const heap = new MinHeap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      expect(heap.min(10)).toBeUndefined();
      expect(heap.min(9)).toBeUndefined();
      expect(heap.min(8)).toBeUndefined();
      expect(heap.min(7)).toBeUndefined();
      expect(heap.min(6)).toBeUndefined();
      expect(heap.min(5)).toBeUndefined();
      expect(heap.min(4)).toBeUndefined();
      expect(heap.min(3)).toBeUndefined();
      expect(heap.min(2)).toBeUndefined();
      expect(heap.min(1)).toBeUndefined();
      expect(heap.min(0)).toBeUndefined();
    });
  });

  describe("max", () => {
    it("should return the index of the highest child of a leaf", () => {
      const heap = new MinHeap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      expect(heap.max(10)).toBeUndefined();
      expect(heap.max(9)).toBeUndefined();
      expect(heap.max(8)).toBeUndefined();
      expect(heap.max(7)).toBeUndefined();
      expect(heap.max(6)).toBeUndefined();
      expect(heap.max(5)).toBeUndefined();
      expect(heap.max(4)).toBe(10);
      expect(heap.max(3)).toBe(8);
      expect(heap.max(2)).toBe(6);
      expect(heap.max(1)).toBe(4);
      expect(heap.max(0)).toBe(2);
    });
  });

  describe("insert", () => {
    it("should add items to the heap and percolate it up", () => {
      const heap = new MinHeap();

      heap.insert(4);
      expect(heap.toString()).toBe("MinHeap(4)");
      heap.insert(1);
      expect(heap.toString()).toBe("MinHeap(1, 4)");
      heap.insert(3);
      expect(heap.toString()).toBe("MinHeap(1, 4, 3)");
      heap.insert(2);
      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4)");
      heap.insert(16);
      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4, 16)");
      heap.insert(9);
      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4, 16, 9)");
      heap.insert(10);
      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4, 16, 9, 10)");
      heap.insert(14);
      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4, 16, 9, 10, 14)");
      heap.insert(8);
      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4, 16, 9, 10, 14, 8)");
      heap.insert(7);
      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4, 7, 9, 10, 14, 8, 16)");
    });
  });

  describe("extract", () => {
    it("should extract root value from the max heap and percolate it down", () => {
      const heap = new MinHeap([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);

      expect(heap.toString()).toBe("MinHeap(1, 2, 3, 4, 7, 9, 10, 14, 8, 16)");
      expect(heap.extract()).toBe(1);
      expect(heap.toString()).toBe("MinHeap(2, 4, 3, 8, 7, 9, 10, 14, 16)");
      expect(heap.extract()).toBe(2);
      expect(heap.toString()).toBe("MinHeap(3, 4, 9, 8, 7, 16, 10, 14)");
      expect(heap.extract()).toBe(3);
      expect(heap.toString()).toBe("MinHeap(4, 7, 9, 8, 14, 16, 10)");
      expect(heap.extract()).toBe(4);
      expect(heap.toString()).toBe("MinHeap(7, 8, 9, 10, 14, 16)");
      expect(heap.extract()).toBe(7);
      expect(heap.toString()).toBe("MinHeap(8, 10, 9, 16, 14)");
      expect(heap.extract()).toBe(8);
      expect(heap.toString()).toBe("MinHeap(9, 10, 14, 16)");
      expect(heap.extract()).toBe(9);
      expect(heap.toString()).toBe("MinHeap(10, 16, 14)");
      expect(heap.extract()).toBe(10);
      expect(heap.toString()).toBe("MinHeap(14, 16)");
      expect(heap.extract()).toBe(14);
      expect(heap.toString()).toBe("MinHeap(16)");
      expect(heap.extract()).toBe(16);
    });
  });

  describe("isEmpty", () => {
    it("should return true if the max heap contains no elements", () => {
      const heap = new MinHeap([]);

      expect(heap.isEmpty).toBe(true);
    });

    it("should return false if the max heap contains any elements", () => {
      const heap = new MinHeap([1]);

      expect(heap.isEmpty).toBe(false);
    });
  });

  describe("length", () => {
    it("should return valid length of the max heap", () => {
      expect(new MinHeap([]).length).toBe(0);
      expect(new MinHeap([1]).length).toBe(1);
      expect(new MinHeap([1, 2]).length).toBe(2);
      expect(new MinHeap([1, 2, 3]).length).toBe(3);
    });
  });
});
