export class Vector3 {
  constructor(public x = 0, public y = 0, public z = 0) {}

  public get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  public add(vector: Vector3) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
  }

  public sub(vector: Vector3) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
  }

  public scale(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
  }

  public multiply(vector: Vector3) {
    this.x *= vector.x;
    this.y *= vector.y;
    this.z *= vector.z;
  }

  public divide(vector: Vector3) {
    this.x /= vector.x;
    this.y /= vector.y;
    this.z /= vector.z;
  }

  public normalize() {
    const length = this.length;

    this.x /= length;
    this.y /= length;
    this.z /= length;
  }

  public equals(vector: Vector3) {
    return this.x === vector.x && this.y === vector.y && this.z === vector.z;
  }

  public distance(vector: Vector3) {
    return Vector3.distance(this, vector);
  }

  public dot(vector: Vector3) {
    return Vector3.dot(this, vector);
  }

  public clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  public toString() {
    return `Vector3(${this.x}, ${this.y}, ${this.z})`;
  }

  public toArray() {
    return [this.x, this.y, this.z];
  }

  static dot(a: Vector3, b: Vector3) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }

  static distance(a: Vector3, b: Vector3) {
    const deltaX = a.x - b.x;
    const deltaY = a.y - b.y;
    const deltaZ = a.z - b.z;

    return Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
  }
}
