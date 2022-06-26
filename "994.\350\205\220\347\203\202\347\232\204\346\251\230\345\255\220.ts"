/*
 * @lc app=leetcode.cn id=994 lang=typescript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let queue: [number, number][] = [];
  const map: Record<string, boolean> = {};

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] == 1) {
        map[`${i}:${j}`] = true;
        grid[i][j] = -1;
      }
    }
  }

  const pos = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  let count = 0;

  // 和 542 差不多,唯一的坑是多了一个 nextQueue,因为每次腐烂是同时开始的,所以需要继续同时开始的那一轮都算作一次,不然次数对被多算
  let nextQueue = queue;
  do {
    queue = nextQueue;
    nextQueue = [];
    let hasDelete = false;
    while (queue.length) {
      const [x, y] = queue.shift()!;
      for (let i = 0; i < 4; i++) {
        const newX = x + pos[i][0];
        const newY = y + pos[i][1];
        if (
          newX >= 0 &&
          newY >= 0 &&
          newX < m &&
          newY < n &&
          grid[newX][newY] == -1
        ) {
          grid[newX][newY] = grid[x][y] + 1;
          delete map[`${newX}:${newY}`];
          nextQueue.push([newX, newY]);
          if (!hasDelete) hasDelete = true;
        }
      }
    }
    if (hasDelete) {
      count++;
    }
  } while (nextQueue.length);

  return Object.keys(map).length > 0 ? -1 : count;
}
// @lc code=end
