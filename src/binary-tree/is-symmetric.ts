import { preorderTraversal } from "./pre-order";
import { BinaryTreeNode } from "./BinaryTreeNode";

export function isSymmetric(root: BinaryTreeNode): boolean {
  return isMirror(root, root);
}

function isMirror(
  t1: BinaryTreeNode | null,
  t2: BinaryTreeNode | null
): boolean {
  if (t1 == null && t2 == null) return true;
  if (t1 == null || t2 == null) return false;

  return (
    t1.val == t2.val &&
    isMirror(t1.right, t2.left) &&
    isMirror(t1.left, t2.right)
  );
}
/*Iterative*/
export function isSymmetric_Iterative(root: BinaryTreeNode) {
  let queue = [];
  queue.push(root);
  queue.push(root);

  while (queue.length) {
    let t1: BinaryTreeNode | null | undefined = queue.shift();
    let t2: BinaryTreeNode | null | undefined = queue.shift();

    if (!t1 && !t2) continue;
    if (!t1 || !t2) return false;
    if (t1.val != t2.val) return false;

    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }
  return true;
}
