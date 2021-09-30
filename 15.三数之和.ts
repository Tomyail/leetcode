/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
// function threeSum(nums: number[]): number[][] {
//   if (nums.length < 3) return [];

//   // const twoSum = (nums: number[]) => {};

//   const addIfNotContain = (source: number[], target: number[][]) => {
//     if (
//       !target.some(
//         ([a, b, c]) => source[0] === a && source[1] === b && source[2] === c
//       )
//     ) {
//       target.push(source);
//     }
//   };
//   const result: number[][] = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           addIfNotContain(
//             [nums[i], nums[j], nums[k]].sort((a, b) => a - b),
//             result
//           );
//         }
//       }
//     }
//   }

//   return result;
// }

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  //从小到大排序
  const sorted = nums.sort((a, b) => a - b);

  const length = sorted.length;
  const result: number[][] = [];
  let end = length - 1;
  let start = 0;
  console.log(sorted);

  let lastmatch: number[] = [];
  let cur = start + 1;
  let sum = 0;
  while (start < end && cur < end && cur > start) {
    // if (sorted[start] === sorted[start - 1]) {
    //   start++;
    //   continue;
    // }
    if (sorted[start] > 0) break;
    // let sum = 0;
    // let cur = start + 1;
    // }
    // for (let cur = start + 1; cur < end; cur++) {
    console.log(sorted[start], sorted[cur], sorted[end]);
    console.log(`start:${start}, cur:${cur}, end:${end}`);
    // if (cur !== start + 1 && sorted[cur] === sorted[cur - 1]) {
    //   // console.log('skip', start, cur, end);
    //   continue;
    // }
    sum = sorted[start] + sorted[end] + sorted[cur];
    console.log(`sum:${sum},`);
    if (sum > 0) {
      end--;
      cur--;
      continue;
    }
    if (sum === 0) {
      if (
        lastmatch &&
        lastmatch[0] === sorted[start] &&
        lastmatch[1] === sorted[cur] &&
        lastmatch[2] === sorted[end]
      ) {
        lastmatch = [sorted[start], sorted[cur], sorted[end]];
        // console.log('skip', lastmatch);
      } else {
        lastmatch = [sorted[start], sorted[cur], sorted[end]];
        // result.push([sorted[start], sorted[cur], sorted[end]]);
        result.push(lastmatch);
      }

      //如果找到了,start 继续增加总数会永远>0,所以需要缩小 end
      end--;
      //正常情况是 cur -1, 但是如果一开始就找到 cur-1  会等于 start 导致退出循环,所以加了一层保护
      cur = Math.max(start + 1, cur - 1);
      console.log(`sum = 0 ,start:${start}, cur:${cur}, end:${end}`);
      // continue;
    }

    if (sum < 0) {
      if (cur === end - 1) {
        start++;
        cur = start + 1;
      } else {
        cur++;
      }
    }

    //最后还找不到,那么 start ++
    // if (sum < 0 && cur === end - 1) {
    //   start++;
    // }
    //小于 0 继续找
    // }
  }
  return result;
}
module.exports = threeSum;
// @lc code=end
