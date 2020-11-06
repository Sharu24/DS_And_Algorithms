/**
 * Linked List Using Classes
 */

// Blueprint to create a Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(null, value, this.head);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(this.tail, value, null);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) return false;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.prev = null;
      this.head = this.head.next;
    }
    return true;
  }

  removeTail() {
    if (!this.tail) return false;
    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return true;
  }

  traverse() {
    let linkedStr = " head ~ ";
    if (!this.head) return linkedStr + "tail";

    let node = this.head;
    while (1) {
      if (node !== this.tail) {
        linkedStr += node.value + " ~ ";
        node = node.next;
        continue;
      } else if (node === this.tail) {
        linkedStr += node.value + " ~ tail ";
        return linkedStr;
      } else {
        break;
      }
    }
    return false;
  }
}

// Placeholder to store Node
class Node {
  constructor(prev, value, next) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}

var ll = new LinkedList();
console.log(ll);
ll.addToHead(11);
ll.addToTail(22);
ll.addToHead(33);
ll.addToTail(55);
ll.addToHead(66);
ll.addToTail(88);
ll.addToHead(888);
console.log(ll);
