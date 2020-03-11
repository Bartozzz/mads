import { Vector2 } from "../src";

describe("mads-vec2", () => {
  it("should instance with correct values", () => {
    const a = new Vector2();
    expect(a.x).toBe(0);
    expect(a.y).toBe(0);

    const b = new Vector2(1, 2);
    expect(b.x).toBe(1);
    expect(b.y).toBe(2);
  });

  it("Vector2.length", () => {
    const [x, y] = [7, 8];
    const a = new Vector2(x, 0);
    const b = new Vector2(0, -y);
    const c = new Vector2();
    const d = new Vector2(x, y);

    expect(a.length).toBe(x);
    expect(b.length).toBe(y);
    expect(c.length).toBe(0);
    expect(d.length).toBe(Math.sqrt(x * x + y * y));
  });

  it("Vector2.add", () => {
    const a = new Vector2(1, 2);
    const b = new Vector2(-1, -2);

    a.add(b);
    expect(a.x).toBe(0);
    expect(a.y).toBe(0);
  });

  it("Vector2.sub", () => {
    const a = new Vector2(1, 2);
    const b = new Vector2(1, 2);

    a.sub(b);
    expect(a.x).toBe(0);
    expect(a.y).toBe(0);
  });

  it("Vector2.scale", () => {
    const a = new Vector2(1, 2);

    a.scale(5);
    expect(a.x).toBe(5);
    expect(a.y).toBe(10);
  });

  it("Vector2.multiply", () => {
    const a = new Vector2(1, 2);
    const b = new Vector2(5, 6);

    a.multiply(b);
    expect(a.x).toBe(5);
    expect(a.y).toBe(12);
  });

  it("Vector2.divide", () => {
    const a = new Vector2(10, 12);
    const b = new Vector2(5, 6);

    a.divide(b);
    expect(a.x).toBe(2);
    expect(a.y).toBe(2);
  });

  it("Vector2.normalize", () => {
    const a = new Vector2(5, 0);
    const b = new Vector2(0, -5);
    const c = new Vector2(2, 5);

    a.normalize();
    expect(a.length).toBe(1);
    expect(a.x).toBe(1);

    b.normalize();
    expect(b.length).toBe(1);
    expect(b.y).toBe(-1);

    c.normalize();
    expect(c.length).toBeCloseTo(1);
    expect(c.x).toBeCloseTo(0.37139068, 7);
    expect(c.y).toBeCloseTo(0.92847669, 7);
  });

  it("Vector2.rotate", () => {
    const a = new Vector2(1, 0);

    a.rotate(Math.PI / 2);
    expect(a.x).toBeCloseTo(0);
    expect(a.y).toBeCloseTo(1);

    a.rotate(Math.PI / 2);
    expect(a.x).toBeCloseTo(-1);
    expect(a.y).toBeCloseTo(0);

    a.rotate(Math.PI / 2);
    expect(a.x).toBeCloseTo(0);
    expect(a.y).toBeCloseTo(-1);

    a.rotate(Math.PI / 2);
    expect(a.x).toBeCloseTo(1);
    expect(a.y).toBeCloseTo(0);
  });

  it("Vector2.equals", () => {
    const a = new Vector2(1, 0);
    const b = new Vector2(0, -1);

    expect(a.x).not.toBe(b.x);
    expect(a.y).not.toBe(b.y);
    expect(a.equals(b)).toBe(false);
    expect(b.equals(a)).toBe(false);

    a.x = b.x;
    a.y = b.y;

    expect(a.x).toBe(b.x);
    expect(a.y).toBe(b.y);
    expect(a.equals(b)).toBe(true);
    expect(b.equals(a)).toBe(true);
  });

  it("Vector2.clone", () => {
    const a = new Vector2(1, 0);
    const b = a.clone();

    expect(a.x).toBe(b.x);
    expect(a.y).toBe(b.y);
  });

  it("Vector2.toString", () => {
    expect(new Vector2(1, 2).toString()).toBe("Vector2(1, 2)");
  });

  it("Vector2.toArray", () => {
    const a = new Vector2(1, 2);
    const aArr = a.toArray();

    expect(aArr[0]).toBe(1);
    expect(aArr[1]).toBe(2);
  });

  it("Vector2#dot", () => {
    const [x, y] = [6, 8];
    const a = new Vector2(x, y);
    const b = new Vector2(-x, -y);
    const c = new Vector2();

    expect(Vector2.dot(a, b)).toBe(-x * x - y * y);
    expect(Vector2.dot(a, c)).toBe(0);
  });

  it("Vector2#distance", () => {
    const [x, y] = [6, 7];
    const a = new Vector2(x, 0);
    const b = new Vector2(0, -y);
    const c = new Vector2();

    expect(Vector2.distance(a, c)).toBe(x);
    expect(Vector2.distance(b, c)).toBe(y);
  });
});
