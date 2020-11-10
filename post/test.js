/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 */
var minWindow = function (s, t) {
  let l = 0
  let r = 0
  const map = new Map()
  for (const c of t) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1)
  }
  let mapSize = map.size
  let res = ''
  while (r < s.length) {
    const right = s[r]
    if (map.has(right)) {
      map.set(right, map.get(right) - 1)
      if (map.get(right) === 0) {
        mapSize--
      }
    }
    while (mapSize === 0) {
      const newRes = s.substring(l, r + 1)
      if (!res || res.length > newRes.length) {
        res = newRes
      }
      const left = s[l]
      if (map.has(left)) {
        console.log(map)
        map.set(left, map.get(left) + 1)
        if (map.get(left) === 1) mapSize++
      }
      l++
    }
    r++
  }
  return res
}

minWindow('ADOBECODEBANC', 'ABC')
