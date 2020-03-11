export class Vector2 {
  constructor(public x = 0, public y = 0) {}

  public get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public add(vector: Vector2) {
    this.x += vector.x;
    this.y += vector.y;
  }

  public sub(vector: Vector2) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  public scale(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
  }

  public multiply(vector: Vector2) {
    this.x *= vector.x;
    this.y *= vector.y;
  }

  public divide(vector: Vector2) {
    this.x /= vector.x;
    this.y /= vector.y;
  }

  public normalize() {
    const length = this.length;

    this.x /= length;
    this.y /= length;
  }

  // Angle in rad.
  public rotate(angle: number) {
    const x = this.x;
    const y = this.y;

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    this.x = x * cos - y * sin;
    this.y = x * sin + y * cos;
  }

  public equals(vector: Vector2) {
    return this.x === vector.x && this.y === vector.y;
  }

  public distance(vector: Vector2) {
    return Vector2.distance(this, vector);
  }

  public dot(vector: Vector2) {
    return Vector2.dot(this, vector);
  }

  public clone() {
    return new Vector2(this.x, this.y);
  }

  public toString() {
    return `Vector2(${this.x}, ${this.y})`;
  }

  public toArray() {
    return [this.x, this.y];
  }

  static dot(a: Vector2, b: Vector2) {
    return a.x * b.x + a.y * b.y;
  }

  static distance(a: Vector2, b: Vector2) {
    const deltaX = a.x - b.x;
    const deltaY = a.y - b.y;

    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
}
