Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length < 2) return arr
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mid) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  const res = rec(this)
  res.forEach((n, i) => (this[i] = n))
}

const arr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
arr1.quickSort()
console.log('====================================')
console.log(arr1)
console.log('====================================')
