const isValid = function (str) {
  if (str.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element === "{" || element === "[" || element === "(") {
      stack.push(element);
    } else {
      const tpop = stack[stack.length - 1];
      if (
        (tpop === "{" && element === "}") ||
        (tpop === "(" && element === ")") ||
        (tpop === "[" && element === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
