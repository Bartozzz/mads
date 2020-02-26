import { Graph } from "../src/index";

describe("mads-graph", () => {
  it("exposes the public API", () => {
    const graph = new Graph();

    expect(graph.addNode).toBeInstanceOf(Function);
    expect(graph.removeNode).toBeInstanceOf(Function);
    expect(graph.addEdge).toBeInstanceOf(Function);
    expect(graph.removeEdge).toBeInstanceOf(Function);
    expect(graph.neighbors).toBeInstanceOf(Function);
    expect(graph.adjacent).toBeInstanceOf(Function);
  });

  describe("addNode", () => {
    let graph: Graph;

    beforeEach(() => {
      graph = new Graph();
    });

    it("should add a node", () => {
      const payloadA = "a";
      const payloadB = "b";

      graph.addNode(payloadA);
      graph.addNode(payloadB);

      expect(graph.adjacencyList.size).toBe(2);
      expect(graph.adjacencyList.has(payloadA)).toBe(true);
      expect(graph.adjacencyList.has(payloadB)).toBe(true);
    });

    it("should add a node only if the node doesn't exist yet", () => {
      const payloadA = "a";

      graph.addNode(payloadA);
      graph.addNode(payloadA);
      graph.addNode(payloadA);

      expect(graph.adjacencyList.size).toBe(1);
    });

    it("should be chainable", () => {
      const payloadA = "a";
      const payloadB = "b";

      graph.addNode(payloadA).addNode(payloadB);

      expect(graph.adjacencyList.size).toBe(2);
      expect(graph.adjacencyList.has(payloadA)).toBe(true);
      expect(graph.adjacencyList.has(payloadB)).toBe(true);
    });
  });

  describe("removeNode", () => {
    const payloadA = "a";
    const payloadB = "b";
    let graph: Graph;

    beforeEach(() => {
      graph = new Graph();

      graph.addNode(payloadA);
      graph.addNode(payloadB);
    });

    it("should remove a node", () => {
      expect(graph.adjacencyList.size).toBe(2);

      graph.removeNode(payloadA);
      graph.removeNode(payloadB);

      expect(graph.adjacencyList.size).toBe(0);
    });

    it("should remove redundant edges", () => {
      graph.addEdge(payloadA, payloadB);
      graph.addEdge(payloadB, payloadA);

      expect(graph.neighbors(payloadA).length).toBe(1);
      expect(graph.neighbors(payloadB).length).toBe(1);

      graph.removeNode(payloadA);

      expect(graph.neighbors(payloadA).length).toBe(0);
      expect(graph.neighbors(payloadB).length).toBe(0);
    });

    it("should be chainable", () => {
      expect(graph.adjacencyList.size).toBe(2);

      graph.removeNode(payloadA).removeNode(payloadB);

      expect(graph.adjacencyList.size).toBe(0);
    });
  });

  describe("addEdge", () => {
    const payloadA = "a";
    const payloadB = "b";
    const payloadC = "c";
    let graph: Graph;

    beforeEach(() => {
      graph = new Graph();
    });

    it("should add an edge if both nodes exists", () => {
      graph.addNode(payloadA);
      graph.addNode(payloadB);
      graph.addEdge(payloadA, payloadB);

      expect(graph.neighbors(payloadA)).toBeInstanceOf(Array);
      expect(graph.neighbors(payloadA).length).toBe(1);
      expect(graph.neighbors(payloadA)[0]).toBe(payloadB);
    });

    it("should add an edge and implicitly create nodes if not found", () => {
      graph.addEdge(payloadA, payloadB);

      expect(graph.adjacencyList.size).toBe(2);
      expect(graph.adjacencyList.has(payloadA)).toBe(true);
      expect(graph.adjacencyList.has(payloadB)).toBe(true);
      expect(graph.neighbors(payloadA)).toBeInstanceOf(Array);
      expect(graph.neighbors(payloadA).length).toBe(1);
      expect(graph.neighbors(payloadA)[0]).toBe(payloadB);
    });

    it("should add an edge only if the edge doesn't exist yet", () => {
      graph.addEdge(payloadA, payloadB);
      graph.addEdge(payloadA, payloadB);
      graph.addEdge(payloadA, payloadB);

      expect(graph.neighbors(payloadA)).toBeInstanceOf(Array);
      expect(graph.neighbors(payloadA).length).toBe(1);
      expect(graph.neighbors(payloadA)[0]).toBe(payloadB);
    });

    it("should be chainable", () => {
      graph.addEdge(payloadA, payloadB).addEdge(payloadA, payloadC);

      expect(graph.neighbors(payloadA)).toBeInstanceOf(Array);
      expect(graph.neighbors(payloadA).length).toBe(2);
      expect(graph.neighbors(payloadA)[0]).toBe(payloadB);
      expect(graph.neighbors(payloadA)[1]).toBe(payloadC);
    });
  });

  describe("removeEdge", () => {
    const payloadA = "a";
    const payloadB = "b";
    const payloadC = "c";
    let graph: Graph;

    beforeEach(() => {
      graph = new Graph();

      graph.addEdge(payloadA, payloadB);
      graph.addEdge(payloadB, payloadC);
    });

    it("should remove an edge", () => {
      expect(graph.neighbors(payloadA).length).toBe(1);
      expect(graph.neighbors(payloadB).length).toBe(1);

      graph.removeEdge(payloadA, payloadB);
      graph.removeEdge(payloadB, payloadC);

      expect(graph.neighbors(payloadA).length).toBe(0);
      expect(graph.neighbors(payloadB).length).toBe(0);
    });

    it("should not remove nodes", () => {
      graph.removeEdge(payloadA, payloadB);
      graph.removeEdge(payloadB, payloadC);

      expect(graph.adjacencyList.size).toBe(3);
    });

    it("should be chainable", () => {
      expect(graph.neighbors(payloadA).length).toBe(1);
      expect(graph.neighbors(payloadB).length).toBe(1);

      graph.removeEdge(payloadA, payloadB).removeEdge(payloadB, payloadC);

      expect(graph.neighbors(payloadA).length).toBe(0);
      expect(graph.neighbors(payloadB).length).toBe(0);
    });
  });

  describe("neighbors", () => {
    const payloadA = "a";
    const payloadB = "b";
    let graph: Graph;

    beforeEach(() => {
      graph = new Graph();

      graph.addNode(payloadA);
      graph.addNode(payloadB);
      graph.addEdge(payloadA, payloadB);
      graph.addEdge(payloadB, payloadA);
    });

    it("should return neighbors", () => {
      expect(graph.neighbors(payloadA)).toBeInstanceOf(Array);
      expect(graph.neighbors(payloadA).length).toBe(1);
      expect(graph.neighbors(payloadA)[0]).toBe(payloadB);

      expect(graph.neighbors(payloadB)).toBeInstanceOf(Array);
      expect(graph.neighbors(payloadB).length).toBe(1);
      expect(graph.neighbors(payloadB)[0]).toBe(payloadA);
    });
  });

  describe("adjacent", () => {
    const payloadA = "a";
    const payloadB = "b";
    const payloadC = "c";
    let graph: Graph;

    beforeEach(() => {
      graph = new Graph();

      graph.addNode(payloadA);
      graph.addNode(payloadB);
      graph.addNode(payloadC);
      graph.addEdge(payloadA, payloadB);
      graph.addEdge(payloadB, payloadA);
    });

    it("should return true if two nodes are adjacent", () => {
      expect(graph.adjacent(payloadA, payloadB)).toBe(true);
      expect(graph.adjacent(payloadB, payloadA)).toBe(true);
    });

    it("should return false if two nodes are not adjacent", () => {
      expect(graph.adjacent(payloadA, payloadC)).toBe(false);
      expect(graph.adjacent(payloadB, payloadC)).toBe(false);
    });
  });
});
