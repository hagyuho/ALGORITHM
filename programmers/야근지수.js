function solution(n, works) {
  var answer = 0;
  const sum = works.reduce((prev, cur) => prev + cur);
  if (sum <= n) return answer;

  let sorted = works.sort((a, b) => a - b);
  const len = works.length;

  while (n) {
    const max = sorted[len - 1];
    for (let i = len - 1; i >= 0; i--) {
      if (sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      if (!n) break;
    }
  }
  answer = works.reduce((a, b) => a + Math.pow(b, 2), 0);
  return answer;
}

console.log(solution(4, [4, 3, 3]));
