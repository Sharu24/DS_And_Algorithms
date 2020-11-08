/**
 * Implement a Queue (Enqueue, Deequeue) with Stacks
 *
 * @methods
 *      enQueue()
 *      deQueue()
 *      rear()
 *      front()
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push = item => this.items.push(item);
  isEmpty = () => (this.items.length ? false : true);
  pop = () => (this.isEmpty() ? false : this.items.pop());
  peek = () => (this.isEmpty() ? false : this.items[this.items.length - 1]);
  first = () => (this.isEmpty() ? false : this.items[0]);
}

class Queue {
  constructor(s1, s2) {
    this.s1 = s1;
    this.s2 = s2;
  }

  enQueue(item) {
    // Push all the elements from s1 to s2
    // Push the new element on top
    // Pop all the elements from s2 and push to s1
    while (!this.s1.isEmpty()) this.s2.push(this.s1.pop());
    this.s1.push(item);
    while (!this.s2.isEmpty()) this.s1.push(this.s2.pop());
  }

  deQueue() {
    return this.s1.pop();
  }

  front() {
    return this.s1.peek();
  }

  rear() {
    return this.s1.first();
  }
}

let stack1 = new Stack();
let stack2 = new Stack();
console.log(stack1.items);
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1.items);
console.log(stack2.items);
let queue = new Queue(stack1, stack2);
queue.enQueue(3);
queue.enQueue(5);
queue.enQueue(10);
console.log(queue.s1.items);
queue.deQueue();
console.log(queue.s1.items);
queue.deQueue();
console.log(queue.s1.items);
queue.deQueue();
console.log(queue.s1.items);

// console.log(stack1.peek());
// console.log(stack1.pop());
// // console.log(stack1.print());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.pop());
