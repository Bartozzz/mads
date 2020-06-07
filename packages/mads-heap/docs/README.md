[`mads-heap`](README.md)

# `mads-heap`

## Index

### External modules

* ["Heap"]()
* ["MaxHeap"]()
* ["MinHeap"]()
* ["index"]()

## External modules

###  "Heap"

• **"Heap"**:

### `Abstract` Heap

• **Heap**:

###  constructor

\+ **new Heap**(`heap`: number[]): *Heap*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`heap` | number[] | [] |

**Returns:** *Heap*

### `Protected` heap

• **heap**: *number[]*

###  isEmpty

• **isEmpty**:

###  length

• **length**:

###  extract

▸ **extract**(): *undefined | number*

Delete the root of the heap and return it.

**Returns:** *undefined | number*

Root element

###  insert

▸ **insert**(`element`: number): *void*

Insert an element on the heap.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | number | Element to insert to the heap  |

**Returns:** *void*

###  left

▸ **left**(`index`: number): *undefined | number*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

###  max

▸ **max**(`index`: number): *undefined | number*

Return the index of the highest child of a leaf or `undefined`. We assume
that the binary trees which have root at `left(index)` and `right(index)`
are max-heaps, but the element at index `index` might be smaller than its
children, which breaks the properties of a max-heap.

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

Index of highest child or undefined

###  min

▸ **min**(`index`: number): *undefined | number*

Return the index of the lowest child of a leaf or `undefined`. We assume
that the binary trees which have root at `left(index)` and `right(index)`
are min-heaps, but the element at index `index` might be bigger than its
children, which breaks the properties of a min-heap.

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

Index of lowest child or undefined

###  parent

▸ **parent**(`index`: number): *undefined | number*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

### `Abstract` percolateDown

▸ **percolateDown**(`index`: number): *void*

Percolate down – repair the heap whose root element is at index `index`
assuming the heaps rooted at its children are valid.

Also known as down-heap, bubble-down, sift-down, sink-down, trickle down,
heapify-down, cascade-down, and extract-min/max…

**`abstract`** 

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

### `Abstract` percolateUp

▸ **percolateUp**(`index`: number): *void*

Percolate up – repair the heap by comparing the element at index `index`
with its parent and moving the element at index `index` up a level.

Also known as up-heap, bubble-up, sift-up, trickle-up, swim-up, heapify-up,
or cascade-up…

**`abstract`** 

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

###  right

▸ **right**(`index`: number): *undefined | number*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

___

###  "MaxHeap"

• **"MaxHeap"**:

###  MaxHeap

• **MaxHeap**:

###  constructor

\+ **new MaxHeap**(`heap`: number[]): *MaxHeap*

*Inherited from void*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`heap` | number[] | [] |

**Returns:** *MaxHeap*

### `Protected` heap

• **heap**: *number[]*

*Inherited from void*

###  isEmpty

• **isEmpty**:

*Inherited from void*

###  length

• **length**:

*Inherited from void*

###  clone

▸ **clone**(): *MaxHeap<>*

**Returns:** *MaxHeap<>*

###  extract

▸ **extract**(): *undefined | number*

*Inherited from void*

Delete the root of the heap and return it.

**Returns:** *undefined | number*

Root element

###  insert

▸ **insert**(`element`: number): *void*

*Inherited from void*

Insert an element on the heap.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | number | Element to insert to the heap  |

**Returns:** *void*

###  left

▸ **left**(`index`: number): *undefined | number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

###  max

▸ **max**(`index`: number): *undefined | number*

*Inherited from void*

Return the index of the highest child of a leaf or `undefined`. We assume
that the binary trees which have root at `left(index)` and `right(index)`
are max-heaps, but the element at index `index` might be smaller than its
children, which breaks the properties of a max-heap.

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

Index of highest child or undefined

###  min

▸ **min**(`index`: number): *undefined | number*

*Inherited from void*

Return the index of the lowest child of a leaf or `undefined`. We assume
that the binary trees which have root at `left(index)` and `right(index)`
are min-heaps, but the element at index `index` might be bigger than its
children, which breaks the properties of a min-heap.

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

Index of lowest child or undefined

###  parent

▸ **parent**(`index`: number): *undefined | number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

###  percolateDown

▸ **percolateDown**(`i`: number): *void*

*Overrides void*

Percolate down – repair the heap whose root element is at index `index`
assuming the heaps rooted at its children are valid.

Also known as down-heap, bubble-down, sift-down, sink-down, trickle down,
heapify-down, cascade-down, and extract-min/max…

**`abstract`** 

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *void*

###  percolateUp

▸ **percolateUp**(`i`: number): *void*

*Overrides void*

Percolate up – repair the heap by comparing the element at index `index`
with its parent and moving the element at index `index` up a level.

Also known as up-heap, bubble-up, sift-up, trickle-up, swim-up, heapify-up,
or cascade-up…

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *void*

###  right

▸ **right**(`index`: number): *undefined | number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

###  toString

▸ **toString**(): *string*

**Returns:** *string*

___

###  "MinHeap"

• **"MinHeap"**:

###  MinHeap

• **MinHeap**:

###  constructor

\+ **new MinHeap**(`heap`: number[]): *MinHeap*

*Inherited from void*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`heap` | number[] | [] |

**Returns:** *MinHeap*

### `Protected` heap

• **heap**: *number[]*

*Inherited from void*

###  isEmpty

• **isEmpty**:

*Inherited from void*

###  length

• **length**:

*Inherited from void*

###  clone

▸ **clone**(): *MinHeap<>*

**Returns:** *MinHeap<>*

###  extract

▸ **extract**(): *undefined | number*

*Inherited from void*

Delete the root of the heap and return it.

**Returns:** *undefined | number*

Root element

###  insert

▸ **insert**(`element`: number): *void*

*Inherited from void*

Insert an element on the heap.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | number | Element to insert to the heap  |

**Returns:** *void*

###  left

▸ **left**(`index`: number): *undefined | number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

###  max

▸ **max**(`index`: number): *undefined | number*

*Inherited from void*

Return the index of the highest child of a leaf or `undefined`. We assume
that the binary trees which have root at `left(index)` and `right(index)`
are max-heaps, but the element at index `index` might be smaller than its
children, which breaks the properties of a max-heap.

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

Index of highest child or undefined

###  min

▸ **min**(`index`: number): *undefined | number*

*Inherited from void*

Return the index of the lowest child of a leaf or `undefined`. We assume
that the binary trees which have root at `left(index)` and `right(index)`
are min-heaps, but the element at index `index` might be bigger than its
children, which breaks the properties of a min-heap.

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

Index of lowest child or undefined

###  parent

▸ **parent**(`index`: number): *undefined | number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

###  percolateDown

▸ **percolateDown**(`i`: number): *void*

*Overrides void*

Percolate down – repair the heap whose root element is at index `index`
assuming the heaps rooted at its children are valid.

Also known as down-heap, bubble-down, sift-down, sink-down, trickle down,
heapify-down, cascade-down, and extract-min/max…

**`abstract`** 

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *void*

###  percolateUp

▸ **percolateUp**(`i`: number): *void*

*Overrides void*

Percolate up – repair the heap by comparing the element at index `index`
with its parent and moving the element at index `index` up a level.

Also known as up-heap, bubble-up, sift-up, trickle-up, swim-up, heapify-up,
or cascade-up…

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *void*

###  right

▸ **right**(`index`: number): *undefined | number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *undefined | number*

###  toString

▸ **toString**(): *string*

**Returns:** *string*

___

###  "index"

• **"index"**:

###  Heap

• **Heap**:

###  MaxHeap

• **MaxHeap**:

###  MinHeap

• **MinHeap**:
