/**
 * @LinkedList
 *      Is a chain of nodes conneected together
 *      Each node contains 3 elements
 *      => prev, value, next
 *
 * @Steps
 *      CreateNode =>
 *          Create a New Node (newNode)
 *              if Linked List is Empty
 *                  head = newNode
 *                  tail = newNode
 *                  newNode.prev = null
 *                  newNode.next = null
 *              if you want to append new node as Head
 *                  head = newNode
 *                  newNode.prev = null
 *                  newNode.next = currentHead
 *                  currentHead.prev = newNode
 *              if you want to append new node as Tail
 *                  tail = newNode
 *                  newNode.prev = currentTail
 *                  newNode.next = null
 *                  currentTail.next = newNode
 *
 * @Operations
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
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(null, value, this.head);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

// Add to Tail (Insert Tail Node)
LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(this.tail, value, null);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

// Delete element from head
LinkedList.prototype.removeHead = function() {
  if (this.head) {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return true;
    }
    this.head = this.head.next;
    this.head.prev = null;
    return true;
  } else {
    return false;
  }
};

// Remove a tail from linked list
LinkedList.prototype.removeTail = function() {
  if (this.tail) {
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    return false;
  }
};

// Add to Head (Insert Head Node)
LinkedList.prototype.traverse = function() {
  let linkedStr = "head -> ";
  let node = this.head;
  while (node && node !== this.tail) {
    linkedStr += node.value + " -> ";
    node = node.next;
  }
  linkedStr = linkedStr + (this.tail ? `${this.tail.value} -> tail` : `tail`);
  return linkedStr;
};

const ll = new LinkedList();
ll.addToHead(11);
// ll.addToTail(55);
// ll.addToHead(22);
// ll.addToTail(66);
// ll.addToHead(33);
// ll.addToTail(44);

console.log(ll.traverse());
console.log(ll.removeHead());
console.log(ll.traverse());
console.log(ll.removeTail());
console.log(ll.traverse());
