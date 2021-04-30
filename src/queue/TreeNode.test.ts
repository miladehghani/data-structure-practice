import { TreeNode } from "./TreeNode";

test("test bfs", () => {
  const root = new TreeNode("A");
  const nodeB = new TreeNode("B");
  const nodeC = new TreeNode("C");
  const nodeD = new TreeNode("D");
  const nodeE = new TreeNode("E");
  const nodeF = new TreeNode("F");
  const nodeG = new TreeNode("G");

  nodeF.childs = [nodeG];
  nodeD.childs = [nodeG];
  nodeC.childs = [nodeE, nodeF];
  nodeB.childs = [nodeE];
  root.childs = [nodeB, nodeC, nodeD];

  expect(root.bfs()).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
});

test("test dfs", () => {
  const root = new TreeNode("A");
  const nodeB = new TreeNode("B");
  const nodeC = new TreeNode("C");
  const nodeD = new TreeNode("D");
  const nodeE = new TreeNode("E");
  const nodeF = new TreeNode("F");
  const nodeG = new TreeNode("G");

  nodeF.childs = [nodeG];
  nodeD.childs = [nodeG];
  nodeC.childs = [nodeE, nodeF];
  nodeB.childs = [nodeE];
  root.childs = [nodeB, nodeC, nodeD];

  expect(root.dfs()).toEqual(["A", "B", "E", "C", "F", "G", "D"]);
});
