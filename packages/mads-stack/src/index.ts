export class Stack<T = any> {
  constructor(public list: T[] = []) {}

  public get isEmpty() {
    return this.list.length === 0;
  }

  public push(x: T) {
    this.list.push(x);
  }

  public pop() {
    return this.list.pop();
  }

  public clone() {
    return new Stack(this.list);
  }

  public toString() {
    return `Stack<${this.list.join(", ")}>`;
  }
}
