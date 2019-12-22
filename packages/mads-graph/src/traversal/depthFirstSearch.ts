import { Graph } from "../Graph";

/**
 * Depth-first search is an algorithm for traversing graph data structures. The
 * algorithm starts at the root node and explores as far as possible along each
 * branch before backtracking.
 *
 * @see   https://en.wikipedia.org/wiki/Depth-first_search
 *
 * @param   graph   A graph
 * @param   node    A node of the graph
 * @param   seen    A set of already seen graph nodes
 * @returns         Seen graph nodes in lexicographic order
 */
export function DFS<T>(graph: Graph<T>, node: T, seen: Set<T> = new Set()) {
  const neighbors = graph.neighbors(node);

  seen.add(node);

  for (let neighbor of neighbors) {
    if (!seen.has(neighbor)) {
      DFS(graph, neighbor, seen);
    }
  }

  // Set preserves insertion order, so the first visited node will be the first
  // element of the Set. It allows us to iterate through nodes in wanted order.
  return seen;
}
