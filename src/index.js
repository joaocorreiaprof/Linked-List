import "./style.css";
import LinkedList from "./modules/LinkedList";

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(500);

console.log(JSON.stringify(ll));
ll.getSize();
