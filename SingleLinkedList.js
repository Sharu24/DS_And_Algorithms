/**
 * @DataStructurees
 *      Singly Linked List
 * @methods
 *      addHeead()
 *      addTail()
 *      removeHeaed()
 *      removeTail()
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(value) {
    // if Empty List, set head and tail to self
    // Make the new Node point to current head
    // Make the new node as the new head node
    let newNode = new Node(value, this.head);
    if (!this.head) this.tail = newNode;
    this.head = newNode;
    return true;
  }

  addTail(value) {
    // if its a empty list,set the head and tail to self
    // Point the current tail to new Node
    let newNode = new Node(value, null);
    if (!this.tail) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    return true;
  }

  removeHead() {
    // Set the next node as the new Head
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
    // Traverse to the tail node
    // Set the previous node as the tail node
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
