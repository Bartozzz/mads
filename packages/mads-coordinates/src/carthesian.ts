interface IPoint {
  x: number;
  y: number;
  z: number;
}

export const coordinatesToIndex = (width: number, [x, y]: [number, number]) => {
  return y * width + x;
};

export const indexToCoordinates = (width: number, index: number) => {
  const x = index % width;
  const y = Math.floor(index / width);

  return [x, y];
};

/**
 * Calculates the "nearness" of a isometric object. In our coordinate space, the
 * farthest sprite has the lowest x and y coordinates.
 *
 * @link    https://gamedev.stackexchange.com/a/8355
 *
 * @param   point   A point in 3D space
 */
export function nearness(point: IPoint) {
  return point.x + point.y + point.z;
}

/**
 * Returns +1 if `a` is nearer than `b` in the carthesian space. Returns -1
 * otherwise.
 *
 * @param   a   A point in 3D space
 * @param   b   A point in 3D space
 */
export function orderByDistance(a: IPoint, b: IPoint) {
  return nearness(a) < nearness(b) ? -1 : +1;
}

/**
 * Returns +1 if `a` is nearer than `b` on the Y axis. Returns -1 otherwise.
 *
 * @param   a   A isometric entity
 * @param   b   A isometric entity
 */
export function orderByY(a: IPoint, b: IPoint) {
  return a.y < b.y ? -1 : +1;
}

/**
 * Returns +1 if `a` is nearer than `b` on the X axis. Returns -1 otherwise.
 *
 * @param   a   A isometric entity
 * @param   b   A isometric entity
 */
export function orderByX(a: IPoint, b: IPoint) {
  return a.x < b.x ? -1 : +1;
}

/**
 * Returns +1 if `a` is nearer than `b` on the Z axis. Returns -1 otherwise.
 *
 * @param   a   A isometric entity
 * @param   b   A isometric entity
 */
export function orderByZ(a: IPoint, b: IPoint) {
  return a.z < b.z ? -1 : +1;
}
