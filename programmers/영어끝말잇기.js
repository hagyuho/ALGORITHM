function solution(n, words) {
  var answer = [];
  var target = 0;
  var alreadyCalled = [];

  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      if (
        alreadyCalled.includes(words[i]) ||
        words[i - 1].substr(-1) !== words[i].substr(0, 1)
      ) {
        target = i;
        break;
      }
    }
    alreadyCalled.push(words[i]);
  }
  answer =
    target === 0
      ? [0, 0]
      : [n - ((target + 1) % n), Math.round((target + 1) / n)];
  return answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
