/**
 * Implements minimal, basic operations that a queue data structure usually
 * include.
 *
 * @see       https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 *
 * @class
 * @template  T – Queue's element interface. Defaults to "any".
 */
export class Queue<T = any> {
  constructor(public list: T[] = []) {}

  public get isEmpty() {
    return this.list.length === 0;
  }

  /**
   * Adds the element x to the queue.
   * Time complexity cost: O(1).
   *
   * @param   x
   */
  public enqueue(x: T) {
    this.list.push(x);
  }

  /**
   * Removes and return the element from the front terminal position.
   * Time complexity cost: O(1).
   */
  public dequeue() {
    return this.list.shift();
  }

  public clone() {
    return new Queue(this.list);
  }

  public toString() {
    return `Queue<${this.list.join(", ")}>`;
  }
}
