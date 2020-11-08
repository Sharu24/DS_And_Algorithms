/**
 * Circular Singly Linked List
 */

class CirSinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addHead(value) {
    let newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let node = this.head;
      while (node.next !== this.head) {
        node = node.next;
      }
      newNode.next = this.head;
      this.head = newNode;
      node.next = newNode;
    }
  }

  addTail(value) {
    let newNode = new Node(value, this.head);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let node = this.head;
      while (node.next !== this.head) {
        node = node.next;
      }
      node.next = newNode;
    }
  }

  removeHead() {
    if (!this.head) return false;
    if (this.head === this.head.next) {
      this.head = null;
    } else {
      let node = this.head;
      while (node.next !== this.head) {
        node = node.next;
      }
      this.head = this.head.next;
      node.next = this.head;
    }
    return true;
  }

  removeTail() {
    if (!this.head) return false;
    if (this.head === this.head.next) {
      this.head = null;
    } else {
      let node = this.head;
      while (node.next.next !== this.head) {
        node = node.next;
      }
      node.next = this.head;
    }
  }

  traverse() {
    let linkedStr = "head -> ";
    if (!this.head) return linkedStr + "tail";
    let node = this.head;
    while (node.next !== this.head) {
      linkedStr += node.value + " -> ";
      node = node.next;
    }
    return linkedStr + node.value + " -> head";
  }
}
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

var csl = new CirSinglyLinkedList();
console.log(csl);
