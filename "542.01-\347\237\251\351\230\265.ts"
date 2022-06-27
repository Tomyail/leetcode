/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 */

// @lc code=start
function updateMatrix(mat: number[][]): number[][] {
  // 广度优先搜索
  // 时间复杂度: O(nxm)
  // 空间复杂度: 最差情况全是 0,那么需要往 queue 里面塞 n*m;
  // 解题思路,抓住最简单的情况所有值都是1,就一个值是 0,那么最终期望的结果是以 0 为中心,每次向外扩散一圈
  // 扩散后的值就是当前中心点的值+1
  const queue: [number, number][] = [];
  let m = mat.length;
  let n = mat[0].length;

  // 首先将所有的 0 都入队，并且将 1 的位置设置成 -1，表示该位置是 未被访问过的 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }

  //上下左右
  const pos = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  while (queue.length) {
    const [x, y] = queue.shift()!;
    //遍历上下左右
    for (let i = 0; i < 4; i++) {
      const newX = x + pos[i][0];
      const newY = y + pos[i][1];
      // 如果四邻域的点是 -1，表示这个点是未被访问过的 1
      // 所以这个点到 0 的距离就可以更新成 matrix[x][y] + 1。
      if (
        newX >= 0 && //越界保护
        newY >= 0 && //越界保护
        newX < m && // 越界保护
        newY < n && //越界保护
        mat[newX][newY] == -1 //向外扩散只要新的值,老的值不包含的原因是之前的值一定比新的值小
      ) {
        //新坐标的值就是当前中心点的值+1
        mat[newX][newY] = mat[x][y] + 1;
        //这个确保能持续向外扩散
        queue.push([newX, newY]);
      }
    }
  }

  return mat;
}
// @lc code=end
