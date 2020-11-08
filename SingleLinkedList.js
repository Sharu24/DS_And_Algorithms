// 1. Implement single linked list,perform add head and tail nodes,remove head and tail nodes operations.
// 2. Implement circular linked list , perform add head and tail nodes, remove head and tail nodes operations.
// 3. Implement Queue data structure using stacks.
// 4. implement stack data structure using Queues.

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(value) {
    // if Empty List,
    //    set head and tail to self
    // else
    //    Point to new node to current head
    //    Make the new node as the new head
    let newNode = new Node(value, this.head);
    if (!this.head) this.tail = newNode;
    this.head = newNode;
    return true;
  }

  addTail(value) {
    let newNode = new Node(value, null);
    if (!this.tail) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    return true;
  }

  removeHead() {
    if (!this.head) return false;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return true;
  }

  removeTail() {
    if (!this.tail) return false;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      let node = this.head;
      while (node.next !== this.tail) {
        node = node.next;
      }
      node.next = null;
      this.tail = node;
    }
    return true;
  }

  traverse() {
    let linkedStr = "head -> ";
    if (!this.head) return linkedStr + "tail";
    let node = this.head;
    while (node.next) {
      linkedStr += node.value + " -> ";
      node = node.next;
    }
    return linkedStr + node.value + " -> tail";
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

var ll = new LinkedList();

console.log(ll);
