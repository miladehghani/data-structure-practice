import { TreeNode } from "./TreeNode";

const nodeTree = new TreeNode(
  5,
  new TreeNode(
    6,
    new TreeNode(2, new TreeNode(8), new TreeNode(7)),
    new TreeNode(4)
  ),
  new TreeNode(3, new TreeNode(2), new TreeNode(1))
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
    expect(TreeNode.toJSON(nodeTree)).toEqual(jsonTree);
  });

  test("should fromJSON work for ", () => {
    expect(TreeNode.fromJSON(jsonTree)).toEqual(nodeTree);
  });
});

// describe("to1DArray conversion", () => {
//   test("should serialize work", () => {
//     console.log(TreeNode.serialize(nodeTree));
//   });
// });
