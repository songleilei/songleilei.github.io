/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    const diff = target - item
    if (map.has(diff)) {
      return [map.get(diff), i]
    } else {
      map.set(item, i)
    }
  }
}

const nums = [2, 7, 11, 15],
  target = 9

console.log(twoSum(nums, target))
