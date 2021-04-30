import { Queue } from "./Queue";

export class TreeNode {
  val: any;
  childs: TreeNode[];

  constructor(val: any) {
    this.val = val;
    this.childs = [];
  }

  bfs() {
    const queue = new Queue();
    const visitedNodes: any[] = [];
    queue.enQueue(this);
    visitedNodes.push(this);
    let step = 0;

    while (!queue.isEmpty()) {
      step++;

      const size = queue.size();
      for (let i = 0; i < size; i++) {
        let pointer = queue.Front();

        pointer?.childs.forEach((child) => {
          if (!visitedNodes.find((vn) => vn === child)) {
            queue.enQueue(child);
            visitedNodes.push(child);
          }
        });
        queue.deQueue();
      }
    }
    return visitedNodes.map((vn) => vn.val);
  }

  //   dfs(target: TreeNode, _pointer?: TreeNode, _visited?: TreeNode[]) {
  //     const visited = _visited || [];
  //     const pointer = _pointer || this;

  //     if (pointer === target) return true;

  //     pointer.childs.forEach((child) => {
  //       if (!visited?.find((v) => v.val !== child.val)) {
  //         visited.push(child);
  //         if (this.dfs(target, child, visited)) return true;
  //       }
  //     });
  //     console.log(visited?.map((v) => v.val));
  //     return false;
  //   }

  dfs() {
    let visited: any = {};
    const stack: TreeNode[] = [];
    stack.push(this);
    visited[this.val] = true;

    while (stack.length > 0) {
      let pointer = stack.pop();
      if (pointer?.childs) {
        visited = {
          ...visited,
          ...this.childInspector(pointer.childs, stack, visited),
        };
      }
    }
    return Object.keys(visited);
  }
  childInspector = (childs: TreeNode[], _stack: TreeNode[], _visited: any) => {
    let visited = _visited;
    const stack = _stack;

    if (!childs) return {};
    childs.forEach((child) => {
      if (visited[child.val] !== true) {
        stack.push(child);
        visited[child.val] = true;
        visited = {
          ...visited,
          ...this.childInspector(child.childs, stack, visited),
        };
        stack.pop();
      }
    });
    return visited;
  };
}
