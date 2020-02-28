[`mads-coordinates`](../README.md) › ["carthesian"](_carthesian_.md)

# External module: "carthesian"

## Index

### Interfaces

* [IPoint](../interfaces/_carthesian_.ipoint.md)

### Functions

* [coordinatesToIndex](_carthesian_.md#const-coordinatestoindex)
* [indexToCoordinates](_carthesian_.md#const-indextocoordinates)
* [nearness](_carthesian_.md#nearness)
* [orderByDistance](_carthesian_.md#orderbydistance)
* [orderByX](_carthesian_.md#orderbyx)
* [orderByY](_carthesian_.md#orderbyy)
* [orderByZ](_carthesian_.md#orderbyz)

## Functions

### `Const` coordinatesToIndex

▸ **coordinatesToIndex**(`width`: number, `__namedParameters`: [number, number]): *number*

*Defined in [carthesian.ts:7](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-coordinates/src/carthesian.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`__namedParameters` | [number, number] |

**Returns:** *number*

___

### `Const` indexToCoordinates

▸ **indexToCoordinates**(`width`: number, `index`: number): *number[]*

*Defined in [carthesian.ts:11](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-coordinates/src/carthesian.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`index` | number |

**Returns:** *number[]*

___

###  nearness

▸ **nearness**(`point`: [IPoint](../interfaces/_carthesian_.ipoint.md)): *number*

*Defined in [carthesian.ts:26](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-coordinates/src/carthesian.ts#L26)*

Calculates the "nearness" of a isometric object. In our coordinate space, the
farthest sprite has the lowest x and y coordinates.

**`link`** https://gamedev.stackexchange.com/a/8355

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A point in 3D space  |

**Returns:** *number*

___

###  orderByDistance

▸ **orderByDistance**(`a`: [IPoint](../interfaces/_carthesian_.ipoint.md), `b`: [IPoint](../interfaces/_carthesian_.ipoint.md)): *1 | -1*

*Defined in [carthesian.ts:37](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-coordinates/src/carthesian.ts#L37)*

Returns +1 if `a` is nearer than `b` in the cartesian space. Returns -1
otherwise.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A point in 3D space |
`b` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A point in 3D space  |

**Returns:** *1 | -1*

___

###  orderByX

▸ **orderByX**(`a`: [IPoint](../interfaces/_carthesian_.ipoint.md), `b`: [IPoint](../interfaces/_carthesian_.ipoint.md)): *1 | -1*

*Defined in [carthesian.ts:57](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-coordinates/src/carthesian.ts#L57)*

Returns +1 if `a` is nearer than `b` on the X axis. Returns -1 otherwise.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A isometric entity |
`b` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A isometric entity  |

**Returns:** *1 | -1*

___

###  orderByY

▸ **orderByY**(`a`: [IPoint](../interfaces/_carthesian_.ipoint.md), `b`: [IPoint](../interfaces/_carthesian_.ipoint.md)): *1 | -1*

*Defined in [carthesian.ts:47](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-coordinates/src/carthesian.ts#L47)*

Returns +1 if `a` is nearer than `b` on the Y axis. Returns -1 otherwise.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A isometric entity |
`b` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A isometric entity  |

**Returns:** *1 | -1*

___

###  orderByZ

▸ **orderByZ**(`a`: [IPoint](../interfaces/_carthesian_.ipoint.md), `b`: [IPoint](../interfaces/_carthesian_.ipoint.md)): *1 | -1*

*Defined in [carthesian.ts:67](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-coordinates/src/carthesian.ts#L67)*

Returns +1 if `a` is nearer than `b` on the Z axis. Returns -1 otherwise.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A isometric entity |
`b` | [IPoint](../interfaces/_carthesian_.ipoint.md) | A isometric entity  |

**Returns:** *1 | -1*
