export class LinkedList {
  val?: number;
  next?: LinkedList;

  constructor() {}

  get(index: number): number {
    let element: LinkedList | undefined = this;
    if (this.val === undefined) return -1;
    else if (index === 0) return this.val;
    else {
      for (let i = 0; i < index; i++) {
        if (element === undefined) return -1;
        element = element.next;
      }
      if (element === undefined || element.val === undefined) return -1;
      return element.val;
    }
  }
  getNode(index: number): LinkedList | null {
    let cursor: LinkedList | undefined = this;
    for (let i = 0; i < index; i++) {
      if (!cursor) return null;
      cursor = cursor.next;
    }
    return cursor || null;
  }

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
    return this.toArray(this).join(",");
  }

  private toArray(linkedList?: LinkedList, _outputArray?: number[]): number[] {
    const outputArray = _outputArray || [];
    if (!linkedList || !linkedList.val) return [];

    outputArray.push(linkedList.val);
    this.toArray(linkedList.next, outputArray);

    return outputArray;
  }
}
