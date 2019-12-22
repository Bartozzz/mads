import { PI180_REV, PI180 } from "mads-constants";

export function sign(input: number) {
  return input / Math.abs(input);
}

export function isPowerOfTwo(input: number) {
  return (input & (input - 1)) === 0;
}

/**
 * @see https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
 */
export function rountToPowerOfTwo(input: number) {
  if (input === 0) {
    return 1;
  }

  input--;
  input |= input >> 1;
  input |= input >> 2;
  input |= input >> 4;
  input |= input >> 8;
  input |= input >> 16;

  return input + 1;
}

export function toDegrees(radians: number) {
  return radians * PI180_REV;
}

export function toRadians(degrees: number) {
  return degrees * PI180;
}

export function randomInt(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function randomFloat(min: number, max: number) {
  return min + Math.random() * (max - min);
}

/**
 * Clamps a number between a minimum and maximum value. Assumes that min < max.
 *
 * @param input   The number to clamp
 * @param min     The minimum value to return
 * @param max     The maximum value to return
 */
export function clamp(input: number, min = 0, max = 1) {
  return input > max ? max : input < min ? min : input;
}

/**
 * Linearly interpolates between a and b by the interpolant t. The parameter t
 * is clamped to the range [0, 1].
 *
 * This is most commonly used to find a point some fraction of the way along a
 * line between two endpoints (e.g. to move an object gradually between those
 * points).
 *
 * @example
 * lerp(0, 100, 0);   // 0
 * lerp(0, 100, 1);   // 100
 * lerp(0, 100, 0.5); // 50
 *
 * @param a
 * @param b
 * @param t
 */
export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * clamp(t);
}
