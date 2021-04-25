import { TreeNode } from "./TreeNode";

export function levelorderTraversal(
  root: TreeNode | null,
  _level?: number,
  _traversed?: number[][]
): number[][] {
  let traversed: number[][] = _traversed || [];
  let level = _level || 0;
  if (!root) return traversed;

  if (!traversed[level]) traversed[level] = [];
  traversed[level].push(root.val);

  if (root.left) levelorderTraversal(root.left, level + 1, traversed);
  if (root.right) levelorderTraversal(root.right, level + 1, traversed);

  return traversed;
}

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue = [root];
  while (queue.length > 0) {
    const levelResult: number[] = [];
    let size = queue.length;
    while (size > 0) {
      const node = queue.shift();
      if (!node) continue;
      levelResult.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      size--;
    }

    result.push(levelResult);
  }

  return result;
}
