[`mads-utils`](../README.md) › ["mads-utils/src/index"](_mads_utils_src_index_.md)

# External module: "mads-utils/src/index"

## Index

### Functions

* [clamp](_mads_utils_src_index_.md#clamp)
* [isPowerOfTwo](_mads_utils_src_index_.md#ispoweroftwo)
* [lerp](_mads_utils_src_index_.md#lerp)
* [randomFloat](_mads_utils_src_index_.md#randomfloat)
* [randomInt](_mads_utils_src_index_.md#randomint)
* [roundToPowerOfTwo](_mads_utils_src_index_.md#roundtopoweroftwo)
* [sign](_mads_utils_src_index_.md#sign)
* [toDegrees](_mads_utils_src_index_.md#todegrees)
* [toRadians](_mads_utils_src_index_.md#toradians)

## Functions

###  clamp

▸ **clamp**(`input`: number, `min`: number, `max`: number): *number*

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

**Parameters:**

Name | Type |
------ | ------ |
`input` | number |

**Returns:** *boolean*

___

###  lerp

▸ **lerp**(`a`: number, `b`: number, `t`: number): *number*

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

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  randomInt

▸ **randomInt**(`min`: number, `max`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  roundToPowerOfTwo

▸ **roundToPowerOfTwo**(`input`: number): *number*

**`see`** https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2

**Parameters:**

Name | Type |
------ | ------ |
`input` | number |

**Returns:** *number*

___

###  sign

▸ **sign**(`input`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number |

**Returns:** *number*

___

###  toDegrees

▸ **toDegrees**(`radians`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

###  toRadians

▸ **toRadians**(`degrees`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*
