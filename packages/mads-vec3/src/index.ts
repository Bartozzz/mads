export class Vector3 {
  constructor(public x = 0, public y = 0, public z = 0) {}

  public get length() {
    const x = this.x;
    const y = this.y;
    const z = this.z;

    return Math.sqrt(x * x + y * y + z * z);
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
    this.x /= this.length;
    this.y /= this.length;
    this.z /= this.length;
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
