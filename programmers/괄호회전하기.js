// 21. 08. 01
function solution(s) {
  if (s.length % 2 === 1) return 0;
  let temp = s;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    temp = temp.slice(1) + temp[0];
    result += getBraket(temp);
  }
  return result;
}

function getBraket(str) {
  const stack = [];
  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (char === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (char === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}
