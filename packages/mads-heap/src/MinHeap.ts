import { Heap } from "./Heap";

export class MinHeap extends Heap {
  /**
   * Percolate up – repair the heap by comparing the element at index `index`
   * with its parent and moving the element at index `index` up a level.
   *
   * Also known as up-heap, bubble-up, sift-up, trickle-up, swim-up, heapify-up,
   * or cascade-up…
   *
   * @param   index
   */
  public percolateUp(i: number) {
    while (this.parent(i) !== undefined) {
      const p = this.parent(i)!;

      if (this.heap[i] < this.heap[p]) {
        [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      } else {
        break;
      }

      i = p;
    }
  }

  /**
   * Percolate down – repair the heap whose root element is at index `index`
   * assuming the heaps rooted at its children are valid.
   *
   * Also known as down-heap, bubble-down, sift-down, sink-down, trickle down,
   * heapify-down, cascade-down, and extract-min/max…
   *
   * @param   index
   * @abstract
   */
  public percolateDown(i: number) {
    while (this.left(i) !== undefined) {
      const min = this.min(i);

      if (min !== undefined && this.heap[min] < this.heap[i]) {
        // Swap:
        [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
      } else {
        break;
      }

      i = min;
    }
  }

  public clone() {
    return new MinHeap(this.heap);
  }

  public toString() {
    return `MinHeap(${this.heap.join(", ")})`;
  }
}
