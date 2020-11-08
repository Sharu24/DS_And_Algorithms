/**
 * Implement a Circular Doubly Linked List
 *
 * @methods
 *      addHead()
 *      addTail()
 *      removeHead()
 *      removeTail()
 */

class CircularDoublyLL {
  constructor() {
    this.head = null;
  }

  addHead(value) {
    let newNode = new Node(null, value, this.head);
    if (!this.head) {
      newNode.prev = newNode;
      newNode.next = newNode;
    } else {
      newNode.prev = this.head.prev;
      this.head.prev.next = newNode;
      this.head.prev = newNode;
    }
    this.head = newNode;
  }

  addTail(value) {
    let newNode = new Node(null, value, this.head);
    if (!this.head) {
      this.head = newNode;
      newNode.prev = newNode;
      newNode.next = newNode;
    } else {
      newNode.prev = this.head.prev;
      this.head.prev.next = newNode;
      this.head.prev = newNode;
    }
  }

  removeHead() {
    if (!this.head) return false;
    if (this.head.next === this.head) {
      this.head = null;
    } else {
      this.head.prev.next = this.head.next;
      this.head.next.prev = this.head.prev;
      this.head = this.head.next;
    }
  }

  removeTail() {
    if (!this.head) return false;
    if (this.head.next === this.head) {
      this.head = null;
    } else {
      this.head.prev.prev.next = this.head;
      this.head.prev = this.head.prev.prev;
    }
  }

  traverse() {
    let linkedStr = "head => ";
    if (!this.head) return linkedStr + "head";
    let node = this.head;
    while (node.next !== this.head) {
      linkedStr += node.value + " <=> ";
      node = node.next;
    }
    return linkedStr + node.value + " => head";
  }
}

class Node {
  constructor(prev, value, next) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}

var cdl = new CircularDoublyLL();
console.log(cdl);
