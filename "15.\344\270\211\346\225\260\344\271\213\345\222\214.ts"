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

function threeSumwrong(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  //从小到大排序
  const sorted = nums.sort((a, b) => a - b);

  const length = sorted.length;
  const result: number[][] = [];
  let end = length - 1;
  let start = 0;
  // console.log(sorted);

  let cur = start + 1;
  let sum = 0;
  while (start < end && cur < end && cur > start) {
    if (sorted[start] > 0) break;
    sum = sorted[start] + sorted[end] + sorted[cur];
    if (sum > 0) {
      end--;
      cur = start + 1;
      continue;
    }
    if (sum === 0) {
      //如果找到了,start 继续增加总数会永远>0,所以需要缩小 end
      end--;
      //正常情况是 cur -1, 但是如果一开始就找到 cur-1  会等于 start 导致退出循环,所以加了一层保护
      cur = Math.max(start + 1, cur - 1);
      // console.log(`sum = 0 ,start:${start}, cur:${cur}, end:${end}`);
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

function threeSum(_nums: number[]) {
  const nums = _nums.sort((a, b) => a - b);
  let result = [];
  let start = 0;
  let end = 0;
  let addNum = 0;
  let length = nums.length;
  for (let index = 1; index < length - 1; index++) {
    start = 0;
    end = length - 1;
    if (index > 1 && nums[index] === nums[index - 1]) {
      start = index - 1;
    }
    // console.log(`begin:start:${start},end:${end},index:${index}`)
    while (start < index && end > index) {
    // console.log(`search:start:${start},end:${end},index:${index}`)
      if (start > 0 && nums[start] == nums[start - 1]) {
        start++;
        continue;
      }
      if (end < length - 1 && nums[end] == nums[end + 1]) {
        end--;
        continue;
      }
      addNum = nums[start] + nums[end] + nums[index];
      if (addNum == 0) {
        result.push([nums[start], nums[index], nums[end]]);
        start++;
        end--;
      } else if (addNum > 0) {
        end--;
      } else {
        start++;
      }
    }
  }
  return result;
}
module.exports = threeSum;
// @lc code=end
