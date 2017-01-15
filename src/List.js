class List {
  constructor() {
    this.memory = [];
  }
  add(element, index) {
    this.memory[index] = element;
  }
  clear() {
    this.memory = [];
  }
  get(index) {
    return this.memory[index];
  }
  remove(index) {
    this.memory = this.memory.filter((datum, i) => i !== index)
  }
}
