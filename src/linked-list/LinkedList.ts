export class LinkedList {
  val?: number;
  next?: LinkedList;

  constructor() {}

  getNode(index: number): LinkedList | null {
    let cursor: LinkedList | undefined = this;
    for (let i = 0; i < index; i++) {
      if (!cursor) return null;
      cursor = cursor.next;
    }
    return cursor || null;
  }
  get(index: number): number {
    if (this.val === undefined) return -1;
    else if (index === 0) return this.val;
    else return this.getNode(index)?.val || -1;
  }

  swap(index1: number, index2: number) {}

  addAtHead(val: number): void {
    if (this.val === undefined) {
      this.val = val;
    } else {
      const newNext = new LinkedList();
      newNext.val = this.val;
      newNext.next = this.next;

      this.val = val;
      this.next = newNext;
    }
  }
  addAtTail(val: number): void {
    if (this.val === undefined) {
      this.val = val;
    } else {
      let cursor: LinkedList = this;

      while (cursor) {
        if (cursor.next === undefined) break;
        cursor = cursor.next;
      }

      const newLink = new LinkedList();
      newLink.val = val;

      cursor.next = newLink;
    }
  }
  addAtIndex(index: number, val: number): void {
    if (this.val === undefined) {
      this.val = val;
    } else if (index === 0) {
      this.addAtHead(val);
    } else {
      const prev = this.getNode(index - 1);
      if (!prev) return;

      const newLink = new LinkedList();
      newLink.val = val;
      newLink.next = prev.next;

      prev.next = newLink;
    }
  }

  deleteHead(): void {
    if (this.val === undefined) return;
    if (this.next === undefined) {
      this.val = undefined;
    } else {
      this.val = this.next.val;
      this.next = this.next.next;
    }
  }
  deleteAtIndex(index: number): void {
    if (this.val === undefined) {
      return;
    } else if (index === 0) {
      this.deleteHead();
    } else {
      const prev = this.getNode(index - 1);
      if (!prev || !prev.next) return;
      prev.next = prev.next.next;
    }
  }
  deleteByVal(
    head: LinkedList | undefined,
    val: number
  ): LinkedList | undefined {
    let sentinel: LinkedList | undefined = new LinkedList();
    sentinel.next = head;
    let prev: LinkedList | undefined = sentinel;
    let curr: LinkedList | undefined = this;

    while (curr !== undefined) {
      if (curr.val === val) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
    return sentinel.next;

    /**
     * let current = head;
    let prev = null
    
    while(1){
        if(current === null) return head;
        
        
        if(current.val === val){
            if(current.next){
                current.val = current.next.val
                current.next = current.next.next                   
                continue;
            }
            else{
                if(prev) prev.next = null;
                else return null;
                return head;
            }
        }
        prev = current   
        current = current.next           
    }
     */
  }

  hasCycle() {
    if (this === undefined || this.next === undefined) return false;

    let slowPointer: LinkedList | undefined = this;
    let fastPointer: LinkedList | undefined = this;

    while (1) {
      if (
        slowPointer === undefined ||
        fastPointer === undefined ||
        fastPointer.next === undefined
      )
        return false;

      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) return true;
    }
  }
  getStartingCyclePoint() {
    const meetNodes = new Set<LinkedList>();
    let cursor: LinkedList | undefined = this;

    while (1) {
      if (cursor === undefined) return null;
      if (meetNodes.has(cursor)) return cursor;

      meetNodes.add(cursor);
      cursor = cursor.next;
    }
  }
  hasIntersectionWith(linkedList: LinkedList) {
    //    ----a----
    //             ------c------
    //------b------
    // ******optimized solution memory: O(1), algorithm complexity: O(N+M)******
    let pA: LinkedList | undefined = this;
    let pB: LinkedList | undefined = linkedList;
    while (pA != pB) {
      pA = pA == null ? linkedList : pA.next;
      pB = pB == null ? this : pB.next;
    }
    return pA;
    // ******Memory expensive solution memory: O(N+M), algorithm complexity: O(b) N = a+c, M = b+c, M > N******
    // let nodeListA = new Set<LinkedList>();
    // let nodeListB = new Set<LinkedList>();

    // let pointerA: LinkedList | undefined = this;
    // let pointerB: LinkedList | undefined = linkedList;

    // while (1) {
    //   if (pointerA === pointerB) return pointerA;
    //   if (!pointerA && !pointerB) return null;

    //   if (pointerB && nodeListA.has(pointerB)) return pointerB;
    //   if (pointerA && nodeListB.has(pointerA)) return pointerA;

    //   pointerA && nodeListA.add(pointerA);
    //   pointerB && nodeListB.add(pointerB);

    //   if (pointerA) pointerA = pointerA.next;
    //   if (pointerB) pointerB = pointerB.next;
    // }
  }

  reverse() {
    let prev: LinkedList | undefined = undefined;
    let current: LinkedList | undefined = this;
    let next: LinkedList | undefined = undefined;

    while (current != undefined) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
    return prev;
  }

  static switchNodesInPair(head?: LinkedList) {
    if (!head && !head.next) {
      const next = head.next;
      head.next = switchNodesInPair(next.next);
      next.next = head;
      return next;
    }
    return head;
  }

  fromArray(numbers: number[]) {
    let cursor: LinkedList = this;

    numbers.forEach((num, index) => {
      cursor.val = num;
      if (index < numbers.length - 1) {
        cursor.next = new LinkedList();
        cursor = cursor.next;
      }
    });
  }
  toString(): string {
    return this.toArray().join(",");
  }
  private toArray(): number[] {
    let output: number[] = [];
    let pointer: LinkedList | undefined = this;
    while (pointer !== undefined) {
      pointer.val && output.push(pointer.val);
      pointer = pointer.next;
    }
    return output;
  }
  // Recursive approch
  // private toArray(linkedList?: LinkedList, _outputArray?: number[]): number[] {
  // const outputArray = _outputArray || [];
  // if (!linkedList || !linkedList.val) return [];

  // outputArray.push(linkedList.val);
  // this.toArray(linkedList.next, outputArray);

  // return outputArray;
  // }
}
