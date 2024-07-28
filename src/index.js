import "./style.css";
import LinkedList from "./modules/LinkedList";

const ll = new LinkedList();

ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(400);
ll.insertLast(500);
ll.removeAt(4);
ll.pop();
ll.insertAt(900, 1);

console.log("Size of linked list:", ll.getSize());
console.log("Head of linked list:", ll.getHead());
console.log("Tail of the linked list:", ll.getTail());
console.log(ll.getAt(2));
console.log(ll.contains(1000));
console.log(ll.find(300));
console.log(JSON.stringify(ll));
