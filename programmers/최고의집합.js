function solution(n, s) {
  const 시작최대값 = Math.floor(s / n);
  const 나머지 = s % n;

  if (!시작최대값) return [-1];

  let answer = new Array(n).fill(시작최대값);
  for (let i = 0; i < 나머지; i++) {
    answer[answer.length - 1 - i]++;
  }

  return answer;
}

console.log(solution(3, 17));
