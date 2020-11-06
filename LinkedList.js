/**
 *-----------------------------------------------------------------------------
 *
 * @LinkedList
 *      Is a chain of nodes conneected together
 *      Each node contains 3 elements
 *      => prev, value, next
 *
 * @methods
 *      Add to Head (Insert Head Node)
 *      Add to Tail (Insert Tail Node)
 *      Remove a Head Node
 *      Remove a Tail Node
 *      Add a Node at a after certain Node
 *      Reemove a Node (One / Including all subsequent nodes)
 *      Traverse a Linked List
 * */

//-----------------------------------------------------------------------------
//Doubly Linked List
function LinkedList() {
  this.head = null;
  this.tail = null;
}

//-----------------------------------------------------------------------------
// Create a Placeholder Node
function Node(prev, value, next) {
  this.prev = prev;
  this.value = value;
  this.next = next;
}

//-----------------------------------------------------------------------------
// Add to Head (Insert Head Node)
LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(null, value, this.head);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

//-----------------------------------------------------------------------------
// Add to Tail (Insert Tail Node)
LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(this.tail, value, null);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

//-----------------------------------------------------------------------------
// Delete a Header node
LinkedList.prototype.removeHead = function() {
  if (this.head) {
    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return value;
    }
    this.head = this.head.next;
    this.head.prev = null;
    return value;
  } else {
    return false;
  }
};

//-----------------------------------------------------------------------------
// Remove a Trailer Node
LinkedList.prototype.removeTail = function() {
  if (this.tail) {
    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return value;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    return value;
  } else {
    return false;
  }
};

//-----------------------------------------------------------------------------
// Add a Node after a certain node
LinkedList.prototype.addNode = function(value, after) {
  if (!after || !this.head) return false;
  let newNode = new Node(null, value, null);
  let node = this.head;

  while (1) {
    if (node.value === after) {
      break; // found
    } else {
      if (node === this.tail) return false; // not found
      node = node.next;
      continue;
    }
  }

  node.next = newNode;
  newNode.prev = node;

  if (node === this.tail) {
    this.tail = newNode;
  } else {
    var temp = node.next;
    newNode.next = temp;
    temp.prev = newNode;
  }
  return true;
};

//-----------------------------------------------------------------------------
// Remove a Node
LinkedList.prototype.removeNode = function(value, option) {
  if (!this.head || !value) return false;
  let node = this.head;

  // Find the node where the value resides
  while (1) {
    if (node.value !== value) {
      if (node !== this.tail) {
        node = node.next;
        continue;
      } else {
        return false; // not found
      }
    } else {
      break; // found
    }
  }
  // if there is only one node
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return true;
  }
  // delete option nodes linked after this node(including)
  if (!Number(option) || option < 0) return false;
  if (option || option === 0) {
    let temp = node.prev;

    if (option === 0) {
      if (!temp) {
        // Where there is only one node in Linked List
        this.head = null;
        this.tail = null;
        return true;
      }
      // Set the previous node as the new Tail node
      this.tail = temp;
      temp.next = null;
      return true;
    }
    var count = Number(option);
    while (count) {
      // Jump to the the node based on option
      if (node !== this.tail) {
        node = node.next;
        count--;
      } else {
        // Delete all trailer nodes
        this.tail = temp;
        temp.next = null;
        return true;
      }
    }
    // Delete nodes from the header
    if (!temp) {
      this.head = node;
      node.prev = null;
      return true;
    }
    // Delete nodes from somewhere between
    temp.next = node;
    node.prv = temp;
    return true;
  }

  //if node is head, make the next element as head
  if (node === this.head) {
    let newHead = node.next;
    this.head = newHead;
    newHead.prev = null;
    return true;
  }
  //if node is tail, make preevious element as tail
  if (node === this.tail) {
    let newTail = node.prev;
    this.tail = newTail;
    newTail.next = null;
    return true;
  }
  //if node is in between, point previous node to next node
  let pTemp = node.prev;
  let nTemp = node.next;
  pTemp.next = nTemp;
  nTemp.prev = pTemp;
  return true;
};

//-----------------------------------------------------------------------------
// Traverse a Linked List
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

/*****************************************************************************/

const ll = new LinkedList();
ll.addToHead(11);
ll.addToTail(55);
ll.addToHead(22);
ll.addToTail(66);
ll.addToHead(33);
ll.addToTail(44);

console.log(ll.traverse());
console.log(ll.removeHead());
console.log(ll.traverse());
console.log(ll.removeTail());
console.log(ll.traverse());

ll.addToTail(100);
ll.addToHead(110);
ll.addToTail(120);

console.log(ll.traverse());
