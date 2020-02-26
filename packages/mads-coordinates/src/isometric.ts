/**
 * Projects 2D/3D carthesian coordinates to 2D isometric coordinates.
 * The X axis goes from top-left to bottom-right.
 * The Y axis goes from top-right to bottom-left.
 * The Z axis goes straight up.
 *
 * @link    https://gamedev.stackexchange.com/a/8355
 *
 * @param   x
 * @param   y
 * @param   [z=0]
 */
export function projectCartesianToIsometric(x: number, y: number, z = 0) {
  return {
    x: x - y,
    y: (x + y) / 2 - z
  };
}
