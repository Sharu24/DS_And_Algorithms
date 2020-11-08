/**
 * Implement Stacks using Queues
 *
 * @Approach
 *      Create two Queues to swap elements to fulfil stack methods
 */

class Queue {
  constructor() {
    this.items = [];
  }
  enQueue = item => this.items.unshift(item);
  isEmpty = () => (this.items.length ? false : true);
  deQueue = () => (this.isEmpty() ? false : this.items.pop());
  rear = () => (this.isEmpty() ? false : this.items[0]);
  front = () => (this.isEmpty() ? false : this.items[this.items.length - 1]);
  copy = queue => (this.items = [...queue.items]);
  clear = () => (this.items = []);
}

class Stack {
  constructor(q1, q2) {
    this.q1 = q1;
    this.q2 = q2;
  }

  push(item) {
    // If the Queue is empty use enQueue
    // Else enQueue the new Element into Q2
    //      deQueue and enQueue Q1 innto Q2
    //      Copy Q2 into Q1 and clean Q2
    if (this.q1.isEmpty()) {
      this.q1.enQueue(item);
    } else {
      this.q2.enQueue(item);
      while (!this.q1.isEmpty()) {
        this.q2.enQueue(this.q1.deQueue());
      }
      this.q1.copy(this.q2);
      this.q2.clear();
    }
  }

  pop() {
    // pop is equivalent to deQueue
    if (this.q1.isEmpty()) return false;
    else return this.q1.deQueue();
  }

  peek() {
    // peek is the front element of a Queue
    if (this.q1.isEmpty()) return false;
    else return this.q1.front();
  }
}

console.log("Queue Operations - ");
let queue1 = new Queue();
let queue2 = new Queue();

queue1.enQueue(22);
queue1.enQueue(33);

console.log(queue1.items);

console.log("Stack Operations - ");

let stack = new Stack(queue1, queue2);

stack.push(44);
stack.push(55);

console.log(stack.q1.items);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.q1.items);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.q1.items);
