const LinkedList = require("./linkedLists");

const reverseLinkedList = (list) => {
  //null and single node checks
  if (list.head == null) return null;
  if (list.head.next == null) return head;

  // create a null node thats placed before head
  let prev = null;
  let curr = list.head;

  while (curr != null) {
    // need to set all values to the next values (prev = curr, curr = curr.next)
    let next = curr.next;
    curr.next = prev;
    [prev, curr] = [curr, next];
  }

  // head is still at 1 and prev is at the end, so swap.
  list.head = prev;

  return list;
};

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.print();
reverseLinkedList(list);
list.print();
