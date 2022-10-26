function solution(people, limit) {
  var answer = 0;
  const sorted = people.sort(function (a, b) {
    return b - a;
  });

  repeat(sorted);
  function repeat(arr) {
    if (arr.length === 0) {
      return;
    }
    if (arr.shift() + arr[sorted.length - 1] <= limit) {
      arr.pop();
      answer++;
      repeat(arr);
    } else {
      answer++;
      repeat(arr);
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
