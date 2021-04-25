import { TreeNode } from "./TreeNode";

export function preorderTraversal(
  root: TreeNode | null,
  traversed: number[] = []
): number[] {
  if (!root) return traversed;

  traversed.push(root.val);

  if (root.left) preorderTraversal(root.left, traversed);

  if (root.right) preorderTraversal(root.right, traversed);

  return traversed;
}
