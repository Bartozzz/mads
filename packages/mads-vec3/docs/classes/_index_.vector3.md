[`mads-vec3`](../README.md) › ["index"](../modules/_index_.md) › [Vector3](_index_.vector3.md)

# Class: Vector3

## Hierarchy

* **Vector3**

## Index

### Constructors

* [constructor](_index_.vector3.md#constructor)

### Properties

* [x](_index_.vector3.md#x)
* [y](_index_.vector3.md#y)
* [z](_index_.vector3.md#z)

### Accessors

* [length](_index_.vector3.md#length)

### Methods

* [add](_index_.vector3.md#add)
* [clone](_index_.vector3.md#clone)
* [distance](_index_.vector3.md#distance)
* [divide](_index_.vector3.md#divide)
* [dot](_index_.vector3.md#dot)
* [equals](_index_.vector3.md#equals)
* [multiply](_index_.vector3.md#multiply)
* [normalize](_index_.vector3.md#normalize)
* [scale](_index_.vector3.md#scale)
* [sub](_index_.vector3.md#sub)
* [toArray](_index_.vector3.md#toarray)
* [toString](_index_.vector3.md#tostring)
* [distance](_index_.vector3.md#static-distance)
* [dot](_index_.vector3.md#static-dot)

## Constructors

###  constructor

\+ **new Vector3**(`x`: number, `y`: number, `z`: number): *[Vector3](_index_.vector3.md)*

*Defined in [index.ts:1](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L1)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`x` | number | 0 |
`y` | number | 0 |
`z` | number | 0 |

**Returns:** *[Vector3](_index_.vector3.md)*

## Properties

###  x

• **x**: *number*

*Defined in [index.ts:2](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L2)*

___

###  y

• **y**: *number*

*Defined in [index.ts:2](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L2)*

___

###  z

• **z**: *number*

*Defined in [index.ts:2](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L2)*

## Accessors

###  length

• **get length**(): *number*

*Defined in [index.ts:4](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L4)*

**Returns:** *number*

## Methods

###  add

▸ **add**(`vector`: [Vector3](_index_.vector3.md)): *void*

*Defined in [index.ts:12](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector3](_index_.vector3.md) |

**Returns:** *void*

___

###  clone

▸ **clone**(): *[Vector3](_index_.vector3.md)‹›*

*Defined in [index.ts:60](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L60)*

**Returns:** *[Vector3](_index_.vector3.md)‹›*

___

###  distance

▸ **distance**(`vector`: [Vector3](_index_.vector3.md)): *number*

*Defined in [index.ts:52](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector3](_index_.vector3.md) |

**Returns:** *number*

___

###  divide

▸ **divide**(`vector`: [Vector3](_index_.vector3.md)): *void*

*Defined in [index.ts:36](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector3](_index_.vector3.md) |

**Returns:** *void*

___

###  dot

▸ **dot**(`vector`: [Vector3](_index_.vector3.md)): *number*

*Defined in [index.ts:56](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector3](_index_.vector3.md) |

**Returns:** *number*

___

###  equals

▸ **equals**(`vector`: [Vector3](_index_.vector3.md)): *boolean*

*Defined in [index.ts:48](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector3](_index_.vector3.md) |

**Returns:** *boolean*

___

###  multiply

▸ **multiply**(`vector`: [Vector3](_index_.vector3.md)): *void*

*Defined in [index.ts:30](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector3](_index_.vector3.md) |

**Returns:** *void*

___

###  normalize

▸ **normalize**(): *void*

*Defined in [index.ts:42](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L42)*

**Returns:** *void*

___

###  scale

▸ **scale**(`scalar`: number): *void*

*Defined in [index.ts:24](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`scalar` | number |

**Returns:** *void*

___

###  sub

▸ **sub**(`vector`: [Vector3](_index_.vector3.md)): *void*

*Defined in [index.ts:18](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector3](_index_.vector3.md) |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *number[]*

*Defined in [index.ts:68](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L68)*

**Returns:** *number[]*

___

###  toString

▸ **toString**(): *string*

*Defined in [index.ts:64](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L64)*

**Returns:** *string*

___

### `Static` distance

▸ **distance**(`a`: [Vector3](_index_.vector3.md), `b`: [Vector3](_index_.vector3.md)): *number*

*Defined in [index.ts:76](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Vector3](_index_.vector3.md) |
`b` | [Vector3](_index_.vector3.md) |

**Returns:** *number*

___

### `Static` dot

▸ **dot**(`a`: [Vector3](_index_.vector3.md), `b`: [Vector3](_index_.vector3.md)): *number*

*Defined in [index.ts:72](https://github.com/Bartozzz/mads/blob/38b6193/packages/mads-vec3/src/index.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Vector3](_index_.vector3.md) |
`b` | [Vector3](_index_.vector3.md) |

**Returns:** *number*
