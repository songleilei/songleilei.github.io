const isValid = function (str) {
  if (str.length % 2 === 1) return false
  const stack = []
  const map = new Map()
  map.set('{', '}')
  map.set('[', ']')
  map.set('(', ')')

  for (let i = 0; i < str.length; i++) {
    const element = str[i]
    if (map.get(element)) {
      stack.push(element)
    } else {
      const target = stack[stack.length - 1]
      if (map.get(target) === element) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
