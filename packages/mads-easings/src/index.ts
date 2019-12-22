/**!
 * Most of the easing functions were taken from:
 * @link https://gist.github.com/gre/1650294
 */

export const easeIn = (p: number) => (t: number) => {
  return Math.pow(t, p);
};

export const easeOut = (p: number) => (t: number) => {
  return 1 - Math.abs(Math.pow(t - 1, p));
};

export const easeInOut = (p: number) => (t: number) => {
  return t < 0.5 ? easeIn(p)(t * 2) / 2 : easeOut(p)(t * 2 - 1) / 2 + 0.5;
};

export const linear = easeIn(1);
export const easeInQuad = easeIn(2);
export const easeOutQuad = easeOut(2);
export const easeInOutQuad = easeInOut(2);
export const easeInCubic = easeIn(3);
export const easeOutCubic = easeOut(3);
export const easeInOutCubic = easeInOut(3);
export const easeInQuart = easeIn(4);
export const easeOutQuart = easeOut(4);
export const easeInOutQuart = easeInOut(4);
export const easeInQuint = easeIn(5);
export const easeOutQuint = easeOut(5);
export const easeInOutQuint = easeInOut(5);

export const easeInSin = (t: number) => {
  return 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
};

export const easeOutSin = (t: number) => {
  return Math.sin((Math.PI / 2) * t);
};

export const easeInOutSin = (t: number) => {
  return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
};
