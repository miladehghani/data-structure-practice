import { BinaryTreeNode } from "./BinaryTreeNode";

export function postorderTraversal(
  root: BinaryTreeNode | null,
  _traversed?: number[]
): number[] {
  let traversed = _traversed || [];

  if (!root) return traversed;

  if (root.left) postorderTraversal(root.left, traversed);

  if (root.right) postorderTraversal(root.right, traversed);

  traversed.push(root.val);

  return traversed;
}
