class Stack {
  constructor() {
    this.memory = [];
    this.length = 0;
  }
  empty() {
    return this.memory.length === 0;
  }
  peek() {
    return this.length > 0 ? this.memory[this.length - 1] : null;
  }
  pop() {
    this.length--;
    return this.memory.pop();
  }
  push(element) {
    this.length++;
    this.memory.push(element);
  }
}
