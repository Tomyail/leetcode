/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const search = (grid: string[][], x: number, y: number) => {
    grid[x][y] = '0';
    const queue: [number, number][] = [[x, y]];

    while (queue.length) {
      const head = queue.shift();

      for (let i = 0; i < direction.length; i++) {
        const [nx, ny] = direction[i];
        const nextX = head![0] + nx;
        const nextY = head![1] + ny;

        if (
          nextX >= 0 &&
          nextX < grid.length &&
          nextY >= 0 &&
          nextY < grid[0].length &&
          grid[nextX][nextY] === '1'
        ) {
          queue.push([nextX, nextY]);
          grid[nextX][nextY] = '0';
        }
      }
    }
  };

  let count = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === '1') {
        search(grid, x, y);
        count++;
      }
    }
  }

  return count;
}

// @lc code=end
