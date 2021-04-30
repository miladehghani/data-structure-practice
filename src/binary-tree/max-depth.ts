import { BinaryTreeNode } from "./BinaryTreeNode";

let answer = 0;

/** Top Down */
export function maxDepth_preOrder(
  root: BinaryTreeNode | null,
  _depth?: number
): number {
  let depth = _depth || 0;

  if (!root) return depth;

  if (!root.left && !root.right) answer = Math.max(answer, depth + 1);

  if (root.left) maxDepth_preOrder(root.left, depth + 1);
  if (root.right) maxDepth_preOrder(root.right, depth + 1);
  return answer;
}

/** Bottom Up */
export function maxDepth_postOrder(root: BinaryTreeNode | null): number {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1; //performance optimization

  return (
    1 + Math.max(maxDepth_postOrder(root.left), maxDepth_postOrder(root.right))
  );
}
