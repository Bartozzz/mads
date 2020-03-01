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

## Methods

###  addEdge

▸ **addEdge**(`x`: T, `y`: T): *this*

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

Removes the node x, if it is there.
Time complexity cost: O(Card(E)).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | T | The node to remove |

**Returns:** *this*

Graph reference
