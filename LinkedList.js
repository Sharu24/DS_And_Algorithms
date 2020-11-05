/**
 * Linked List
 * Is a chain of nodes conneected together
 * Each node contains 3 elements
 * => prev, value, next
 *
 * Operations
 * 1. Add a Node
 * 2. Delete a Node
 */

// Doubly Linked List
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(prev, value, next) {
  this.prev = prev;
  this.value = value;
  this.next = next;
}

// Add to Head (Insert Head Node)
LinkedList.prototype.addToHead = value => {
  let newNode = new Node(null, value);
};
