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
  insertAt(data, index) {
    //If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    //If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data);
    let current, previous;

    //Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Noded before the index
      count++;
      current = current.next; //Node after the index
    }

    node.next = current;
    previous.next = node;

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
  removeAt(index) {
    if (index < 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  pop() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
    this.size--;
  }
  contains(value) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return null;
  }
}
