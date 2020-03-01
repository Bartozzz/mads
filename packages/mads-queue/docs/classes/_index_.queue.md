[`mads-queue`](../README.md) › ["index"](../modules/_index_.md) › [Queue](_index_.queue.md)

# Class: Queue <**T**>

Implements minimal, basic operations that a queue data structure usually
include.

**`see`** https://en.wikipedia.org/wiki/Queue_(abstract_data_type)

**`template`** T – Queue's element interface. Defaults to "any".

## Type parameters

▪ **T**

## Hierarchy

* **Queue**

## Index

### Constructors

* [constructor](_index_.queue.md#constructor)

### Properties

* [list](_index_.queue.md#list)

### Accessors

* [isEmpty](_index_.queue.md#isempty)

### Methods

* [clone](_index_.queue.md#clone)
* [dequeue](_index_.queue.md#dequeue)
* [enqueue](_index_.queue.md#enqueue)
* [toString](_index_.queue.md#tostring)

## Constructors

###  constructor

\+ **new Queue**(`list`: T[]): *[Queue](_index_.queue.md)*

*Defined in [index.ts:10](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-queue/src/index.ts#L10)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`list` | T[] | [] |

**Returns:** *[Queue](_index_.queue.md)*

## Properties

###  list

• **list**: *T[]*

*Defined in [index.ts:11](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-queue/src/index.ts#L11)*

## Accessors

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [index.ts:13](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-queue/src/index.ts#L13)*

**Returns:** *boolean*

## Methods

###  clone

▸ **clone**(): *[Queue](_index_.queue.md)‹T›*

*Defined in [index.ts:35](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-queue/src/index.ts#L35)*

**Returns:** *[Queue](_index_.queue.md)‹T›*

___

###  dequeue

▸ **dequeue**(): *undefined | T*

*Defined in [index.ts:31](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-queue/src/index.ts#L31)*

Removes and return the element from the front terminal position.
Time complexity cost: O(1).

**Returns:** *undefined | T*

___

###  enqueue

▸ **enqueue**(`x`: T): *void*

*Defined in [index.ts:23](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-queue/src/index.ts#L23)*

Adds the element x to the queue.
Time complexity cost: O(1).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | T |   |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

*Defined in [index.ts:39](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-queue/src/index.ts#L39)*

**Returns:** *string*
