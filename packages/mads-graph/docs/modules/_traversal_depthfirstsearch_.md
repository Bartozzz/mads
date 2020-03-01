[`mads-graph`](../README.md) › ["traversal/depthFirstSearch"](_traversal_depthfirstsearch_.md)

# External module: "traversal/depthFirstSearch"

## Index

### Functions

* [DFS](_traversal_depthfirstsearch_.md#dfs)

## Functions

###  DFS

▸ **DFS**<**T**>(`graph`: [Graph](../classes/_graph_.graph.md)‹T›, `node`: T, `seen`: Set‹T›): *Set‹T›*

Depth-first search is an algorithm for traversing graph data structures. The
algorithm starts at the root node and explores as far as possible along each
branch before backtracking.

**`see`** https://en.wikipedia.org/wiki/Depth-first_search

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`graph` | [Graph](../classes/_graph_.graph.md)‹T› | - | A graph |
`node` | T | - | A node of the graph |
`seen` | Set‹T› | new Set() | A set of already seen graph nodes |

**Returns:** *Set‹T›*

Seen graph nodes in lexicographic order
