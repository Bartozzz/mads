[`mads-coordinates`](../README.md) › ["isometric"](_isometric_.md)

# External module: "isometric"

## Index

### Functions

* [projectCartesianToIsometric](_isometric_.md#projectcartesiantoisometric)

## Functions

###  projectCartesianToIsometric

▸ **projectCartesianToIsometric**(`x`: number, `y`: number, `z`: number): *object*

*Defined in [isometric.ts:13](https://github.com/Bartozzz/mads/blob/6d75697/packages/mads-coordinates/src/isometric.ts#L13)*

Projects 2D/3D carthesian coordinates to 2D isometric coordinates.
The X axis goes from top-left to bottom-right.
The Y axis goes from top-right to bottom-left.
The Z axis goes straight up.

**`link`** https://gamedev.stackexchange.com/a/8355

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`x` | number | - |
`y` | number | - |
`z` | number | 0 |

**Returns:** *object*

* **x**: *number* = x - y

* **y**: *number* = (x + y) / 2 - z
