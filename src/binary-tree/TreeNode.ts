export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
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

  static serialize(root: TreeNode | null): string {
    if (!root) return "null";
    if (!root.left && !root.right) return `${root.val}`;
    return `${root.val},
    ${TreeNode.serialize(root.left)},
    ${TreeNode.serialize(root.right)}`;
  }

  static deserialize(serialize: string) {}

  static toJSON(root: TreeNode | null): any {
    if (!root) return null;
    return {
      val: root.val,
      left: TreeNode.toJSON(root.left),
      right: TreeNode.toJSON(root.right),
    };
  }

  static fromJSON(jsonTree: any): TreeNode | null {
    if (!jsonTree) return null;
    return new TreeNode(
      jsonTree.val,
      TreeNode.fromJSON(jsonTree.left),
      TreeNode.fromJSON(jsonTree.right)
    );
  }
}
