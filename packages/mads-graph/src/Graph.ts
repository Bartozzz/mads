/**
 * Implements minimal, basic operations that a directed, unweighted graph data
 * structure usually includes.
 *
 * @see       https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
 * @see       https://en.wikipedia.org/wiki/Adjacency_list
 *
 * @class
 * @template  T Graph's node interface. Defaults to "any".
 */
export class Graph<T = any> {
  public adjacencyList: Map<T, T[]> = new Map();

  /**
   * Adds the node x, if it is not there.
   * Time complexity cost: O(1).
   *
   * @param   x   The node to add
   * @return      Graph reference
   */
  public addNode(x: T) {
    if (!this.adjacencyList.has(x)) {
      this.adjacencyList.set(x, []);
    }

    return this;
  }

  /**
   * Removes the node x, if it is there.
   * Time complexity cost: O(Card(E)).
   *
   * @param   x   The node to remove
   * @return      Graph reference
   */
  public removeNode(x: T) {
    if (this.adjacencyList.has(x)) {
      for (const a of this.adjacencyList.keys()) {
        for (const b of this.neighbors(a)) {
          if (b === x) {
            this.removeEdge(a, b);
          }
        }
      }

      this.adjacencyList.delete(x);
    }

    return this;
  }

  /**
   * Adds the edge from the node x to the node y, if it is not there.
   * Time complexity cost: O(1).
   *
   * @param   x   Node x
   * @param   y   Node y
   * @return      Graph reference
   */
  public addEdge(x: T, y: T) {
    // Ensure both x & y are present in the graph:
    this.addNode(x);
    this.addNode(y);

    if (!this.adjacent(x, y)) {
      this.neighbors(x).push(y);
    }

    return this;
  }

  /**
   * Removes the edge from the node x to the node y, if it is there.
   * Time complexity cost: O(Card(V)).
   *
   * @param   x   Node x
   * @param   y   Node y
   * @return      Graph reference
   */
  public removeEdge(x: T, y: T) {
    if (this.adjacencyList.has(x)) {
      this.adjacencyList.set(
        x,
        this.neighbors(x).filter(a => a !== y)
      );
    }

    return this;
  }

  /**
   * Lists all nodes y such that there is an edge from the node x to the node y.
   * Time complexity cost: O(1).
   *
   * @param   x   Node x
   * @return      List of neighbors
   */
  public neighbors(x: T) {
    if (this.adjacencyList.has(x)) {
      return this.adjacencyList.get(x) as T[];
    } else {
      return [];
    }
  }

  /**
   * Tests whether there is an edge from the node x to the node y.
   * Time complexity cost: O(Card(V)).
   *
   * @param   x   Node x
   * @param   y   Node y
   * @return      Whether nodes x & y are adjacent
   */
  public adjacent(x: T, y: T) {
    return this.neighbors(x).includes(y);
  }
}
