import { BinaryTreeNode } from "./BinaryTreeNode";

export function preorderTraversal(
  root: BinaryTreeNode | null,
  traversed: number[] = []
): number[] {
  if (!root) return traversed;

  traversed.push(root.val);

  if (root.left) preorderTraversal(root.left, traversed);

  if (root.right) preorderTraversal(root.right, traversed);

  return traversed;
}
