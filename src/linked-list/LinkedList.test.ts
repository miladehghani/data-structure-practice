import { LinkedList } from "./LinkedList";

describe("general", () => {
  test("from Array should work", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4]);
    expect(list.toString()).toBe("1,2,3,4");
  });
  test("to Array should work", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4]);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });
});

describe("get", () => {
  test("should get work", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4]);

    expect(list.get(0)).toBe(1);
    expect(list.get(3)).toBe(4);
  });

  test("should get work on list with one item", () => {
    const list = new LinkedList();
    list.fromArray([0]);

    expect(list.get(0)).toBe(0);
  });

  test("should get work on list with multiple item", () => {
    const list = new LinkedList();
    list.fromArray([0, 1, 2, 3]);

    expect(list.get(0)).toBe(0);
  });

  test("should get work on last item", () => {
    const list = new LinkedList();
    list.fromArray([0, 1, 2, 3]);

    expect(list.get(3)).toBe(3);
  });
});

describe("getNode test", () => {
  test("getNode should return first node", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4]);

    expect(list.getNode(0)).toBe(list);
  });
  test("getNode should return second node", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4]);

    expect(list.getNode(1)).toBe(list.next);
  });

  test("getNode should return last node", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4]);

    expect(list.getNode(3)).toBe(list.next?.next?.next);
  });
});

describe("addAtHead tests", () => {
  test("should addAtHead works on empty object", () => {
    const list = new LinkedList();

    list.addAtHead(1);

    expect(list.toString()).toBe("1");
  });

  test("should addAtHead works on object with one link", () => {
    const list = new LinkedList();
    list.fromArray([1]);
    list.addAtHead(0);

    const expected = new LinkedList();
    expected.fromArray([0, 1]);
    expect(list).toEqual(expected);
  });

  test("should addAtHead works on pre populated object", () => {
    const list = new LinkedList();

    list.fromArray([1, 2, 3]);
    list.addAtHead(0);

    const expected = new LinkedList();
    expected.fromArray([0, 1, 2, 3]);
    expect(list).toEqual(expected);
  });
});

describe("addAtTail tests", () => {
  test("should addAtTail works on empty object", () => {
    const list = new LinkedList();

    list.addAtTail(1);

    expect(list.toString()).toBe("1");
  });

  test("should addAtTail works on object with one link", () => {
    const list = new LinkedList();
    list.fromArray([0]);
    list.addAtTail(1);

    const expected = new LinkedList();
    expected.fromArray([0, 1]);
    expect(list).toEqual(expected);
  });

  test("should addAtTail works on pre populated object", () => {
    const list = new LinkedList();

    list.fromArray([0, 1, 2]);
    list.addAtTail(3);

    const expected = new LinkedList();
    expected.fromArray([0, 1, 2, 3]);

    expect(list).toEqual(expected);
  });
});

describe("addAtIndex tests", () => {
  test("should addAtIndex 0 works on empty object", () => {
    const list = new LinkedList();

    list.addAtIndex(0, 1);

    expect(list.toString()).toBe("1");
  });

  test("should addAtIndex 0 works on object with one link", () => {
    const list = new LinkedList();
    list.fromArray([1]);
    list.addAtIndex(0, 0);

    const expected = new LinkedList();
    expected.fromArray([0, 1]);
    expect(list).toEqual(expected);
  });

  test("should addAtIndex 0 works on pre populated object", () => {
    const list = new LinkedList();

    list.fromArray([1, 2, 3]);
    list.addAtIndex(0, 0);

    const expected = new LinkedList();
    expected.fromArray([0, 1, 2, 3]);

    expect(list).toEqual(expected);
  });

  test("should addAtIndex non zero works on object with one link", () => {
    const list = new LinkedList();

    list.fromArray([0]);
    list.addAtIndex(1, 1);

    const expected = new LinkedList();
    expected.fromArray([0, 1]);

    expect(list).toEqual(expected);
  });

  test("should addAtIndex non zero works on pre populated object", () => {
    const list = new LinkedList();

    list.fromArray([0, 2, 3]);
    list.addAtIndex(1, 1);

    const expected = new LinkedList();
    expected.fromArray([0, 1, 2, 3]);

    expect(list).toEqual(expected);
  });

  test("should addAt last Index  works on pre populated object", () => {
    const list = new LinkedList();

    list.fromArray([0, 1, 2]);
    list.addAtIndex(3, 3);

    const expected = new LinkedList();
    expected.fromArray([0, 1, 2, 3]);

    expect(list).toEqual(expected);
  });
});

describe("deleteHead", () => {
  test("deleteHead list with one item should work ", () => {
    const list = new LinkedList();
    list.val = 1;
    list.deleteHead();

    expect(list).toEqual(new LinkedList());
  });

  test("deleteHead list with multiple item should work ", () => {
    const list = new LinkedList();
    list.fromArray([0, 1, 2, 3]);
    list.deleteHead();

    const expected = new LinkedList();
    expected.fromArray([1, 2, 3]);
    expect(list).toEqual(expected);
  });
});

describe("deleteAtIndex 0", () => {
  test("deleteAtIndex works on list with multiple item", () => {
    const list = new LinkedList();
    list.fromArray([0, 1, 2, 3, 4]);
    list.deleteAtIndex(2);

    const expected = new LinkedList();
    expected.fromArray([0, 1, 3, 4]);
    expect(list).toEqual(expected);
  });

  test("deleteAt last index works on list with multiple item", () => {
    const list = new LinkedList();
    list.fromArray([0, 1, 2, 3, 4]);
    list.deleteAtIndex(4);

    const expected = new LinkedList();
    expected.fromArray([0, 1, 2, 3]);
    expect(list).toEqual(expected);
  });
});

describe("combined", () => {
  test("test case 1", () => {
    const list = new LinkedList();
    list.addAtHead(0);
    list.addAtIndex(1, 1);
    expect(list.get(2)).toBe(-1);
    list.addAtHead(4);
    expect(list.get(2)).toBe(1);
    list.addAtHead(4);
    console.log(list);
    expect(list.get(2)).toBe(0);
    expect(list.get(3)).toBe(1);
    list.addAtIndex(1, 6);
    list.addAtTail(1);
    list.addAtHead(0);
  });
});
