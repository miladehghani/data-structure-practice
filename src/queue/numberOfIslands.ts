function numIslands(grid: string[][]): number {
  let count = 0;
  let visitedNodes = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const current = grid[i][j];

      if (
        current === "1" &&
        !visitedNodes.find((v) => v[0] === i && v[1] === j)
      ) {
        count++;
        let nodes = bfs(grid, i, j);
        visitedNodes = [...visitedNodes, ...nodes];
      }
    }
  }

  return count;
}

function bfs(grid: string[][], i: number, j: number) {
  let visited = [];
  let queue = [];

  queue.push([i, j]);

  while (queue.length > 0) {
    const size = queue.length;

    for (let index = 0; index < size; index++) {
      const front = queue[0];
      const childs = getChilds(grid, front);

      childs.forEach((child) => {
        if (!visited.find((v) => v[0] === child[0] && v[1] === child[1])) {
          queue.push(child);
          visited.push(child);
        }
      });

      queue.shift();
    }
  }
  return visited;
}

function getChilds(grid: string[][], node: number[]) {
  let childs = [];

  const up = grid[node[0]] && grid[node[0]][node[1] + 1];
  const down = grid[node[0]] && grid[node[0]][node[1] - 1];
  const left = grid[node[0] - 1] && grid[node[0] - 1][node[1]];
  const right = grid[node[0] + 1] && grid[node[0] + 1][node[1]];

  if (up === "1") childs.push([node[0], node[1] + 1]);
  if (down === "1") childs.push([node[0], node[1] - 1]);
  if (left === "1") childs.push([node[0] - 1, node[1]]);
  if (right === "1") childs.push([node[0] + 1, node[1]]);

  return childs;
}
