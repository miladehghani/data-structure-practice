import { BinaryTreeNode } from "./BinaryTreeNode";
import { preorderTraversal } from "./pre-order";
import { inorderTraversal } from "./in-order";
import { postorderTraversal } from "./post-order";
import { levelorderTraversal } from "./level-order";
import { isSymmetric } from "./is-symmetric";

const tree = new BinaryTreeNode(
  5,
  new BinaryTreeNode(
    6,
    new BinaryTreeNode(2, new BinaryTreeNode(8), new BinaryTreeNode(7)),
    new BinaryTreeNode(4)
  ),
  new BinaryTreeNode(3, new BinaryTreeNode(2), new BinaryTreeNode(1))
);

describe("pre-order", () => {
  test("should traverse [5,6,3,2,4,2,1,8,7] correctly", () => {
    expect(preorderTraversal(tree)).toEqual([5, 6, 2, 8, 7, 4, 3, 2, 1]);
  });
});

describe("in-order", () => {
  test("should traverse [5,6,3,2,4,2,1,8,7] correctly", () => {
    expect(inorderTraversal(tree)).toEqual([8, 2, 7, 6, 4, 5, 2, 3, 1]);
  });
});

describe("post-order", () => {
  test("should traverse [5,6,3,2,4,2,1,8,7] correctly", () => {
    expect(postorderTraversal(tree)).toEqual([8, 7, 2, 4, 6, 2, 1, 3, 5]);
  });
});

describe("level-order", () => {
  test("should traverse [5,6,3,2,4,2,1,8,7] correctly", () => {
    expect(levelorderTraversal(tree)).toEqual([
      [5],
      [6, 3],
      [2, 4, 2, 1],
      [8, 7],
    ]);
  });
});

describe("is-symetric", () => {
  test("should return true for [1,2,2,3,4,4,3]", () => {
    const tree = new BinaryTreeNode(
      1,
      new BinaryTreeNode(2, new BinaryTreeNode(3), new BinaryTreeNode(4)),
      new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(3))
    );
    expect(isSymmetric(tree)).toBeTruthy();
  });
});
