/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val)
    if(this.size===0){
      this.first = newNode;
      this.last = newNode;
    } else {
      // this.last.next = newNode;
      newNode.next=this.first;
      this.first = newNode;
    }
    this.size += 1;
    // return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size ===0){
      throw new Error("stack is already empty")
      
   } else {
      let returnVal = this.first.val;
      this.first =this.first.next;
      if (this.size===2){
        this.tail=this.head;
      }
    
    this.size -= 1;
    return returnVal;
   }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  } 

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size===0){return true} 
    else {return false}
  }
}

module.exports = Stack;
