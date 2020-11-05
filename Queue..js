/**
 * @DataStructure
 *      Queue
 *
 * @Desc
 *      A Data Structuree which stores a data entity
 *      in First In First Out (FIFO) Order. Similar to Stacks,
 *      the only difference is in reemoving elements. In Queues
 *      Elements which came first are removed first, whereas
 *      Stack removes Elements which are recently added
 *
 * @Operations
 *      1. enqueue()
 *      2. dequeue()
 *      3. front()
 *      4. rear()
 *      5. travrese()
 */

// Implement a Queue
class Queue {
  constructor() {
    this.items = [];
    this.maxSize = 10;
  }

  // Length of a Queue
  isLength() {
    return this.items.length;
  }

  // Push Element into a Queue
  enqueue(value) {
    return this.isLength() === this.maxSize
      ? "Queue Overflow"
      : this.items.unshift(value);
  }

  // Remove Elements from a Queue
  dequeue() {
    return !this.isLength() ? "Queue is Empty" : this.items.pop();
  }

  // Get a Front Element
  front() {
    return !this.isLength() ? "Queue is Empty" : this.items[0];
  }

  // Get a Rear Element
  rear() {
    return !this.isLength()
      ? "Queue is Empty"
      : this.items[this.isLength() - 1];
  }

  // Traverse a Queue
  travrese() {
    if (!this.isLength()) return "Queue is Empty";

    let queueElements = "";
    this.items.forEach(element => {
      queueElements += "->" + element;
    });
    return queueElements;
  }
}

const queue = new Queue();
queue.enqueue(11);
queue.enqueue(12);
console.log("front", queue.front());
queue.enqueue(13);
queue.enqueue(14);
console.log("front", queue.front());

console.log(queue.travrese());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.travrese());

console.log("front", queue.front());
console.log("rear", queue.rear());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
