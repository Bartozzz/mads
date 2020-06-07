export abstract class Heap {
  /**
   * Percolate up – repair the heap by comparing the element at index `index`
   * with its parent and moving the element at index `index` up a level.
   *
   * Also known as up-heap, bubble-up, sift-up, trickle-up, swim-up, heapify-up,
   * or cascade-up…
   *
   * @param   index
   * @abstract
   */
  public abstract percolateUp(index: number): void;

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
  public abstract percolateDown(index: number): void;

  constructor(protected heap: number[] = []) {
    // Build heap from the raw list:
    for (let i = Math.floor(this.length / 2); i >= 0; i--) {
      this.percolateDown(i);
    }
  }

  public parent(index: number) {
    const leaf = Math.floor((index - 1) / 2);

    if (leaf >= 0) {
      return leaf;
    }
  }

  public left(index: number) {
    const leaf = 2 * index + 1;

    if (leaf < this.length) {
      return leaf;
    }
  }

  public right(index: number) {
    const leaf = 2 * index + 2;

    if (leaf < this.length) {
      return leaf;
    }
  }

  /**
   * Return the index of the lowest child of a leaf or `undefined`. We assume
   * that the binary trees which have root at `left(index)` and `right(index)`
   * are min-heaps, but the element at index `index` might be bigger than its
   * children, which breaks the properties of a min-heap.
   *
   * @param   i   Parent index
   * @return      Index of lowest child or undefined
   */
  public min(index: number) {
    let lowest = index;
    const l = this.left(index);
    const r = this.right(index);

    if (l && this.heap[l] < this.heap[lowest]) {
      lowest = l;
    }

    if (r && this.heap[r] < this.heap[lowest]) {
      lowest = r;
    }

    if (lowest !== index) {
      return lowest;
    }
  }

  /**
   * Return the index of the highest child of a leaf or `undefined`. We assume
   * that the binary trees which have root at `left(index)` and `right(index)`
   * are max-heaps, but the element at index `index` might be smaller than its
   * children, which breaks the properties of a max-heap.
   *
   * @param   i   Parent index
   * @return      Index of highest child or undefined
   */
  public max(index: number) {
    let highest = index;
    const l = this.left(index);
    const r = this.right(index);

    if (l && this.heap[l] > this.heap[highest]) {
      highest = l;
    }

    if (r && this.heap[r] > this.heap[highest]) {
      highest = r;
    }

    if (highest !== index) {
      return highest;
    }
  }

  /**
   * Insert an element on the heap.
   *
   * @param  element  Element to insert to the heap
   */
  public insert(element: number) {
    this.heap.push(element);

    this.percolateUp(this.length - 1);
  }

  /**
   * Delete the root of the heap and return it.
   *
   * @return          Root element
   */
  public extract() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      return this.heap.pop();
    }

    const rootValue = this.heap[0];
    const lastValue = this.heap.pop();

    this.heap[0] = lastValue!;
    this.percolateDown(0);

    return rootValue;
  }

  public get isEmpty() {
    return this.length === 0;
  }

  public get length() {
    return this.heap.length;
  }
}
