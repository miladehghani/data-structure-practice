import { BinaryTreeNode } from "./BinaryTreeNode";

const nodeTree = new BinaryTreeNode(
  5,
  new BinaryTreeNode(
    6,
    new BinaryTreeNode(2, new BinaryTreeNode(8), new BinaryTreeNode(7)),
    new BinaryTreeNode(4)
  ),
  new BinaryTreeNode(3, new BinaryTreeNode(2), new BinaryTreeNode(1))
);

const jsonTree = {
  val: 5,
  left: {
    val: 6,
    left: {
      val: 2,
      left: { val: 8, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 2, left: null, right: null },
    right: { val: 1, left: null, right: null },
  },
};

describe("Tree Node JSON convertion", () => {
  test("should toJSON work for ", () => {
    expect(BinaryTreeNode.toJSON(nodeTree)).toEqual(jsonTree);
  });

  test("should fromJSON work for ", () => {
    expect(BinaryTreeNode.fromJSON(jsonTree)).toEqual(nodeTree);
  });
});

// describe("to1DArray conversion", () => {
//   test("should serialize work", () => {
//     console.log(TreeNode.serialize(nodeTree));
//   });
// });
