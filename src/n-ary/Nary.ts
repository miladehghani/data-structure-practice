class Nary {
  children: Nary[] = [];
  val: number;

  constructor(val: number) {
    this.val = val;
  }

  preorder(root: Nary | null, traversed: number[] = []): number[] {
    if (!root) return traversed;

    traversed.push(root.val);

    root.children.forEach((child) => this.preorder(child, traversed));

    return traversed;
  }

  postorder(root: Nary | null, traversed: number[] = []): number[] {
    if (!root) return traversed;

    root.children.forEach((child) => this.postorder(child, traversed));

    traversed.push(root.val);

    return traversed;
  }

  levelorder(
    root: Nary | null,
    traversed: number[] = [],
    level: number = 0
  ): number[] {
    if (!root) return traversed;

    traversed.push(root.val);

    root.children.forEach((child) =>
      this.levelorder(child, traversed, level + 1)
    );

    return traversed;
  }
}
