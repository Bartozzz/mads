[`mads-graph`](../README.md) › ["Graph"](../modules/_graph_.md) › [Graph](_graph_.graph.md)

# Class: Graph <**T**>

Implements minimal, basic operations that a directed, unweighted graph data
structure usually includes.

**`see`** https://en.wikipedia.org/wiki/Graph_(abstract_data_type)

**`see`** https://en.wikipedia.org/wiki/Adjacency_list

**`template`** T Graph's node interface. Defaults to "any".

## Type parameters

▪ **T**

## Hierarchy

* **Graph**

## Index

### Properties

* [adjacencyList](_graph_.graph.md#adjacencylist)

### Methods

* [addEdge](_graph_.graph.md#addedge)
* [addNode](_graph_.graph.md#addnode)
* [adjacent](_graph_.graph.md#adjacent)
* [neighbors](_graph_.graph.md#neighbors)
* [removeEdge](_graph_.graph.md#removeedge)
* [removeNode](_graph_.graph.md#removenode)

## Properties

###  adjacencyList

• **adjacencyList**: *Map‹T, T[]›* = new Map()

*Defined in [Graph.ts:12](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-graph/src/Graph.ts#L12)*

## Methods

###  addEdge

▸ **addEdge**(`x`: T, `y`: T): *this*

*Defined in [Graph.ts:60](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-graph/src/Graph.ts#L60)*

Adds the edge from the node x to the node y, if it is not there.
Time complexity cost: O(1).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | T | Node x |
`y` | T | Node y |

**Returns:** *this*

Graph reference

___

###  addNode

▸ **addNode**(`x`: T): *this*

*Defined in [Graph.ts:21](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-graph/src/Graph.ts#L21)*

Adds the node x, if it is not there.
Time complexity cost: O(1).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | T | The node to add |

**Returns:** *this*

Graph reference

___

###  adjacent

▸ **adjacent**(`x`: T, `y`: T): *boolean*

*Defined in [Graph.ts:114](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-graph/src/Graph.ts#L114)*

Tests whether there is an edge from the node x to the node y.
Time complexity cost: O(Card(V)).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | T | Node x |
`y` | T | Node y |

**Returns:** *boolean*

Whether nodes x & y are adjacent

___

###  neighbors

▸ **neighbors**(`x`: T): *T[]*

*Defined in [Graph.ts:98](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-graph/src/Graph.ts#L98)*

Lists all nodes y such that there is an edge from the node x to the node y.
Time complexity cost: O(1).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | T | Node x |

**Returns:** *T[]*

List of neighbors

___

###  removeEdge

▸ **removeEdge**(`x`: T, `y`: T): *this*

*Defined in [Graph.ts:80](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-graph/src/Graph.ts#L80)*

Removes the edge from the node x to the node y, if it is there.
Time complexity cost: O(Card(V)).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | T | Node x |
`y` | T | Node y |

**Returns:** *this*

Graph reference

___

###  removeNode

▸ **removeNode**(`x`: T): *this*

*Defined in [Graph.ts:36](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-graph/src/Graph.ts#L36)*

Removes the node x, if it is there.
Time complexity cost: O(Card(E)).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | T | The node to remove |

**Returns:** *this*

Graph reference
