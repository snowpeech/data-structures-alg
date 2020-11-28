/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail=newNode;
    }

    this.length +=1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head=newNode;
    }

    this.length +=1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1)
    
  }

  /** shift(): return & remove first item. */

  shift() {
    let returnNode = this.head.val;

    if(this.length===1){
      this.head=null;
      this.tail=null;
      this.length=0;
      
    } else {
      this.head = this.head.next;
      this.length -=1;
    }
    return returnNode; 
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let curr =this.head;
  
    for (let i=0; i<idx;i++){
      curr = curr.next;
    }
    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let curr =this.head;
  
    for (let i=0; i<idx;i++){
      curr = curr.next;
    }
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);

    if(this.length ===0){
      this.head = newNode;
      this.tail = newNode;
    } else if(idx===0){
      newNode.next=this.head;
      this.head = newNode;
    }else{
      let curr =this.head;

      for (let i=0; i<idx-1;i++){
        curr = curr.next;
      }
      newNode.next=curr.next;
      curr.next = newNode;
  
      if(idx===this.length) this.tail=newNode;
    }
        
    this.length +=1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let returnVal;
    if(this.length <=1){
      
      returnVal =this.head.val;
      
      this.head=null;
      this.tail=null;
      this.length=0;

    } else {
    if(idx===0){
      returnVal =this.head.val;
      this.head=this.head.next;
    } else {

      let curr =this.head;
  
      for (let i=0; i<idx-1;i++){
        curr = curr.next;
      }
      if (idx === this.length-1){ 
        this.tail=curr}

      returnVal =curr.next.val;
      curr = curr.next.next;
      
      }
      this.length -=1;
    } 
    return returnVal;   
  }

  /** average(): return an average of all values in the list */

  average() {
  if(this.length===0)return 0;
  
  //walk through list adding 
  let curr =this.head;
  let total = 0;
  while(curr){
    total += curr.val;
    curr = curr.next;
  }
  return total/this.length;
  // curr=this.head;  
  }
}

module.exports = LinkedList;
