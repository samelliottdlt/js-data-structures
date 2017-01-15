class Queue {
  constructor() {
    this.memory = [];
    this.length = 0;
  }
  add(element) {
    this.memory.push(element);
  }
  peek() {
    return this.length > 0 ? this.memory[0] : null;
  }
  poll() {
    const headOfQueue = peek();
    this.memory.filter((datum, i) => i === 0);
  }
}
