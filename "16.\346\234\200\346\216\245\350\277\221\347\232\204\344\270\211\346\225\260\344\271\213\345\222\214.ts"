/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  const sorted = nums.sort();
  let founded = false
  let sum:number = nums[0]+ nums[1]+ nums[2]
  let preDelta = 0;
  for (let i = 0; i < sorted.length; i++) {
    if(founded){
      break
    }
    let start = 0;
    let end = sorted.length - 1;
    while (start < i && end > i) {
      sum = sorted[start] + sorted[end] + sorted[i];
      const delta = sum - target;
      if (delta > 0) {
        end--;
      } else if (delta == 0) {
      founded = true;
      break;
      } else {
        start++;
      }
      //如果当前的值比之前的值更接近目标值
      if (preDelta > delta) {
        preDelta = delta;
      } else {
      }
    }
  }
  return sum
}
// @lc code=end
