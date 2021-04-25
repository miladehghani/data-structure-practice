import { TreeNode } from "./TreeNode";

export function inorderTraversal(
  root: TreeNode | null,
  _traversed?: number[]
): number[] {
  let traversed = _traversed || [];

  if (!root) return traversed;

  if (root.left) inorderTraversal(root.left, traversed);

  traversed.push(root.val);

  if (root.right) inorderTraversal(root.right, traversed);

  return traversed;
}
