export class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(
    val?: number,
    left?: BinaryTreeNode | null,
    right?: BinaryTreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  // static to1DArray(root: TreeNode | null): number[] {
  //   if (!root) return [];
  //   let output = [root.val];

  //   let subroot = root.left;

  //   while (subroot) {
  //     output.push(subroot.val);
  //     if (subroot.left) output.push(subroot.left.val);
  //     if (subroot.right) output.push(subroot.right.val);
  //     subroot = subroot.right;
  //   }
  //   return output;
  // }

  static serialize(root: BinaryTreeNode | null): string {
    if (!root) return "null";
    if (!root.left && !root.right) return `${root.val}`;
    return `${root.val},
    ${BinaryTreeNode.serialize(root.left)},
    ${BinaryTreeNode.serialize(root.right)}`;
  }

  static deserialize(serialize: string) {}

  static toJSON(root: BinaryTreeNode | null): any {
    if (!root) return null;
    return {
      val: root.val,
      left: BinaryTreeNode.toJSON(root.left),
      right: BinaryTreeNode.toJSON(root.right),
    };
  }

  static fromJSON(jsonTree: any): BinaryTreeNode | null {
    if (!jsonTree) return null;
    return new BinaryTreeNode(
      jsonTree.val,
      BinaryTreeNode.fromJSON(jsonTree.left),
      BinaryTreeNode.fromJSON(jsonTree.right)
    );
  }
}
