import Node from "./Node";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  getSize() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  getHead() {
    return this.head ? this.head.data : null;
  }

  getTail() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }

  getAt(index) {
    if (index < 0 || index >= this.getSize()) {
      throw new Error(`ERROR: Index ${index} is out of bounds`);
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }
}
