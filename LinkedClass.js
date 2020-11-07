/**
 * @DataStructure
 *      Linked List Using Classes
 *
 * @methods
 *      addToHead(value)
 *      addToTail(value)
 *      removeHead()
 *      removeTail()
 *      addNode(value,after)
 *      removeNode(value,options)
 */

// Blueprint to create a Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add an Node at the Head
  addToHead(value) {
    const newNode = new Node(null, value, this.head);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }

  // Add a Node to the tail
  addToTail(value) {
    const newNode = new Node(this.tail, value, null);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  /**
   * Remove a Haed Node
   * If there are no Nodes in Linked List
   * If there is only one Node
   * If there are more than one nodes
   */
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

  /**
   * Remove a Tail Node
   * If there are no Nodes in Linked List
   * If there is only one Node
   * If there are more than one nodes
   */
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

  /**
   * Add a Node after a certain Node
   * if we need to insert after a specific node, traverse
   * if just value is passed append it at the end
   */
  addNode(value, after) {
    if (!value) return false;
    let node = this.head;
    if (after) {
      if (!node) return false;
      while (node.next) {
        if (node.value === after) break;
        else node = node.next;
      }
      if (node.value !== after) return false;
      const newNode = new Node(node, value, node.next);
      if (node === this.tail) this.tail = newNode;
      else node.next.prev = newNode;
      node.next = newNode;
    } else {
      const newNode = new Node(this.tail, value, null);
      if (newNode.prev) newNode.prev.next = newNode;
      else this.head = newNode;
      this.tail = newNode;
    }
    return true;
  }

  /**
   * Remove a certain Node
   *
   * If there are no options, Just delete the node
   * - Handle when the node is a head / tail
   * - Handle when the value/node is not found
   *
   * if there are options
   * - Option = -1
   *    * Delete all the nodes after the searched node
   * - Option = 0
   *    * Just return the delete, dont delete it
   * - Option = Natural Number (1,2,3...n)
   *    * Delete the number of elements after searched node
   *    * Deletes Searched node as well
   */
  removeNode(value, options) {
    if (!this.head || !value) return false;
    let node = this.head;
    while (node.next) {
      if (node.value === value) break;
      else node = node.next;
    }
    if (node.value !== value) return false;
    // if head node than make the next node as head
    // if tail node than make the prev node as tail
    // else prev node point to next node
    let count = Number(options);
    if (!count) {
      if (!node.prev) {
        if (!node.next) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = node.next;
          node.next.prev = null;
        }
      } else if (!node.next) {
        this.tail = node.prev;
        node.prev.next = null;
      } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
      }
    } else {
      // if user wants to delete everything (including value node)
      if (count === -1) {
        // if head node make the list empty
        // else make the previous node as tail node
        if (node === this.head) {
          this.head = this.tail = null;
        } else {
          this.tail = node.prev;
          node.prev.next = null;
        }
      } else {
        // if user wants to delete only few nodes
        let temp = node.prev;
        while (count-- && node.next) node = node.next;
        if (!temp && !node.next) {
          this.head = null;
          this.tail = null;
        } else if (!node.next) {
          this.tail = temp;
          temp.next = null;
        } else if (!temp) {
          this.head = node;
          node.prev = null;
        } else {
          temp.next = node;
          node.prev = temp;
        }
      }
    }
    return true;
  }

  // Traverse through the Nodes
  traverse() {
    let linkedStr = " head ~ ";
    if (!this.head) return linkedStr + "tail";

    let node = this.head;
    while (node.next) {
      linkedStr += node.value + " ~ ";
      node = node.next;
    }
    if (node === this.tail) return linkedStr + node.value + " ~ tail ";
    else return false;
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

/**
 * ------------------------------------------------------------
 */
var ll = new LinkedList();
console.log(ll);
ll.addToHead(11);
ll.addToTail(22);
ll.addToHead(33);
ll.addToTail(55);
ll.addToHead(66);
ll.addToTail(88);
ll.addToHead(888);
ll.traverse();
