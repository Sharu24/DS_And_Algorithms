/**
 * Implemeting A Stack using Array
 * 1. Create a Class
 * 2. Define Methods
 * 2.1 push(item)
 * 2.2 pop()
 * 2.3 peek()
 * 2.4 isEmpty()
 * 2.5 length()
 * 2.6 print()
 */

// Create a Stack class
class Stack {
  constructor() {
    // Initializing Empty Stack
    this.items = [];
    this.maxSize = 10;
  }

  // Check if the stack is Empty
  isEmpty() {
    return this.items.length ? false : true;
  }

  // Push new Element into Stack
  push(value) {
    return this.isLength() === this.maxSize
      ? "Stack Overflow"
      : this.items.push(value);
  }

  // Pop Element from the Stack
  pop(value) {
    return this.isEmpty() ? "Stack Underflow" : this.items.pop();
  }

  // Peek the Stack and fetch the element
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check the size of the stack
  isLength() {
    return this.items.length;
  }

  // traverse the Stack
  traverse() {
    var str = "";
    this.items.forEach(element => {
      str += "," + element;
    });
    console.log(str);
  }
}

// Create a Stack Object (Instantiation)
const stack = new Stack();

stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
stack.push(4);
console.log(stack);
stack.push(5);

console.log(stack.peek());

stack.traverse();

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
