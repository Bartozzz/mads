[`mads-utils`](../README.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Functions

* [clamp](_index_.md#clamp)
* [isPowerOfTwo](_index_.md#ispoweroftwo)
* [lerp](_index_.md#lerp)
* [randomFloat](_index_.md#randomfloat)
* [randomInt](_index_.md#randomint)
* [roundToPowerOfTwo](_index_.md#roundtopoweroftwo)
* [sign](_index_.md#sign)
* [toDegrees](_index_.md#todegrees)
* [toRadians](_index_.md#toradians)

## Functions

###  clamp

▸ **clamp**(`input`: number, `min`: number, `max`: number): *number*

*Defined in [index.ts:52](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L52)*

Clamps a number between a minimum and maximum value. Assumes that min < max.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`input` | number | - | The number to clamp |
`min` | number | 0 | The minimum value to return |
`max` | number | 1 | The maximum value to return  |

**Returns:** *number*

___

###  isPowerOfTwo

▸ **isPowerOfTwo**(`input`: number): *boolean*

*Defined in [index.ts:7](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number |

**Returns:** *boolean*

___

###  lerp

▸ **lerp**(`a`: number, `b`: number, `t`: number): *number*

*Defined in [index.ts:73](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L73)*

Linearly interpolates between a and b by the interpolant t. The parameter t
is clamped to the range [0, 1].

This is most commonly used to find a point some fraction of the way along a
line between two endpoints (e.g. to move an object gradually between those
points).

**`example`** 
lerp(0, 100, 0);   // 0
lerp(0, 100, 1);   // 100
lerp(0, 100, 0.5); // 50

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | number | - |
`b` | number | - |
`t` | number |   |

**Returns:** *number*

___

###  randomFloat

▸ **randomFloat**(`min`: number, `max`: number): *number*

*Defined in [index.ts:41](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  randomInt

▸ **randomInt**(`min`: number, `max`: number): *number*

*Defined in [index.ts:37](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  roundToPowerOfTwo

▸ **roundToPowerOfTwo**(`input`: number): *number*

*Defined in [index.ts:14](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L14)*

**`see`** https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2

**Parameters:**

Name | Type |
------ | ------ |
`input` | number |

**Returns:** *number*

___

###  sign

▸ **sign**(`input`: number): *number*

*Defined in [index.ts:3](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number |

**Returns:** *number*

___

###  toDegrees

▸ **toDegrees**(`radians`: number): *number*

*Defined in [index.ts:29](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

###  toRadians

▸ **toRadians**(`degrees`: number): *number*

*Defined in [index.ts:33](https://github.com/Bartozzz/mads/blob/506fbba/packages/mads-utils/src/index.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*
