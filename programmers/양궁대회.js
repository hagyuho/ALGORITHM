function solution(n, info) {
  var answer = [];
  let ASum = 0;

  for (let i = 0; i < info.length; i++) {
    if (info[i] > 0) ASum += 10 - i;
  }
  console.log(ASum);

  return answer;
}

const N = 5;
const Info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

console.log(solution(N, Info));
