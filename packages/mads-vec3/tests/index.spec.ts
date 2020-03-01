import { Vector3 } from "../src";

describe("mads-vec3", () => {
  it("should instance with correct values", () => {
    const a = new Vector3();
    expect(a.x).toBe(0);
    expect(a.y).toBe(0);
    expect(a.z).toBe(0);

    const b = new Vector3(1, 2, 3);
    expect(b.x).toBe(1);
    expect(b.y).toBe(2);
    expect(b.z).toBe(3);
  });

  it("Vector3.length", () => {
    const [x, y, z] = [7, 8, 9];
    const a = new Vector3(x, 0, 0);
    const b = new Vector3(0, -y, 0);
    const c = new Vector3(0, 0, z);
    const d = new Vector3();
    const e = new Vector3(x, y, z);

    expect(a.length).toBe(x);
    expect(b.length).toBe(y);
    expect(c.length).toBe(z);
    expect(d.length).toBe(0);
    expect(e.length).toBe(Math.sqrt(x * x + y * y + z * z));
  });

  it("Vector3.add", () => {
    const a = new Vector3(1, 2, 3);
    const b = new Vector3(-1, -2, -3);

    a.add(b);
    expect(a.x).toBe(0);
    expect(a.y).toBe(0);
    expect(a.z).toBe(0);
  });

  it("Vector3.sub", () => {
    const a = new Vector3(1, 2, 3);
    const b = new Vector3(1, 2, 3);

    a.sub(b);
    expect(a.x).toBe(0);
    expect(a.y).toBe(0);
    expect(a.z).toBe(0);
  });

  it("Vector3.scale", () => {
    const a = new Vector3(1, 2, 3);

    a.scale(5);
    expect(a.x).toBe(5);
    expect(a.y).toBe(10);
    expect(a.z).toBe(15);
  });

  it("Vector3.multiply", () => {
    const a = new Vector3(1, 2, 3);
    const b = new Vector3(5, 6, 7);

    a.multiply(b);
    expect(a.x).toBe(5);
    expect(a.y).toBe(12);
    expect(a.z).toBe(21);
  });

  it("Vector3.divide", () => {
    const a = new Vector3(10, 12, 14);
    const b = new Vector3(5, 6, 7);

    a.divide(b);
    expect(a.x).toBe(2);
    expect(a.y).toBe(2);
    expect(a.z).toBe(2);
  });

  it("Vector3.normalize", () => {
    const a = new Vector3(5, 0, 0);
    const b = new Vector3(0, -5, 0);
    const c = new Vector3(0, 0, -5);

    a.normalize();
    expect(a.length).toBe(1);
    expect(a.x).toBe(1);

    b.normalize();
    expect(b.length).toBe(1);
    expect(b.y).toBe(-1);

    c.normalize();
    expect(c.length).toBe(1);
    expect(c.z).toBe(-1);
  });

  it("Vector3.equals", () => {
    const a = new Vector3(1, 0, 0);
    const b = new Vector3(0, -1, 0);

    expect(a.x).not.toBe(b.x);
    expect(a.y).not.toBe(b.y);
    expect(a.equals(b)).toBe(false);
    expect(b.equals(a)).toBe(false);

    a.x = b.x;
    a.y = b.y;
    a.z = b.z;

    expect(a.x).toBe(b.x);
    expect(a.y).toBe(b.y);
    expect(a.equals(b)).toBe(true);
    expect(b.equals(a)).toBe(true);
  });

  it("Vector3.clone", () => {
    const a = new Vector3(1, 2, 3);
    const b = a.clone();

    expect(a.x).toBe(b.x);
    expect(a.y).toBe(b.y);
    expect(a.z).toBe(b.z);
  });

  it("Vector3.toString", () => {
    expect(new Vector3(1, 2, 3).toString()).toBe("Vector3(1, 2, 3)");
  });

  it("Vector3.toArray", () => {
    const a = new Vector3(1, 2, 3);
    const aArr = a.toArray();

    expect(aArr[0]).toBe(1);
    expect(aArr[1]).toBe(2);
    expect(aArr[2]).toBe(3);
  });

  it("Vector3#dot", () => {
    const [x, y, z] = [6, 8, 10];
    const a = new Vector3(x, y, z);
    const b = new Vector3(-x, -y, -z);
    const c = new Vector3();

    expect(Vector3.dot(a, b)).toBe(-x * x - y * y - z * z);
    expect(Vector3.dot(a, c)).toBe(0);
  });

  it("Vector3#distance", () => {
    const [x, y, z] = [6, 7, 8];
    const a = new Vector3(x, 0, 0);
    const b = new Vector3(0, -y, 0);
    const c = new Vector3(0, 0, z);
    const d = new Vector3();

    expect(Vector3.distance(a, d)).toBe(x);
    expect(Vector3.distance(b, d)).toBe(y);
    expect(Vector3.distance(c, d)).toBe(z);
  });
});
