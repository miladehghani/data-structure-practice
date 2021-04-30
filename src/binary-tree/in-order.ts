import { BinaryTreeNode } from "./BinaryTreeNode";

export function inorderTraversal(
  root: BinaryTreeNode | null,
  _traversed?: number[]
): number[] {
  let traversed = _traversed || [];

  if (!root) return traversed;

  if (root.left) inorderTraversal(root.left, traversed);

  traversed.push(root.val);

  if (root.right) inorderTraversal(root.right, traversed);

  return traversed;
}
