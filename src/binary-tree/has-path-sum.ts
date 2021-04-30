import { BinaryTreeNode } from "./BinaryTreeNode";

export function hasPathSum(
  root: BinaryTreeNode | null,
  targetSum: number
): boolean {
  if (!root) return false;

  targetSum -= root.val;

  const leftPathSumOutput = hasPathSum(root.left, targetSum);
  if (leftPathSumOutput) return true;

  const rightPathSumOutput = hasPathSum(root.right, targetSum);
  if (rightPathSumOutput) return true;

  if (!root.left && !root.right && targetSum === 0) return true;

  return false;
}
