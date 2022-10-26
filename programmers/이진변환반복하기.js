function solution(s) {
  var answer = [];
  let repeatCount = 0;
  let zeroCount = 0;

  repeat(s);

  function repeat(string) {
    repeatCount++;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "0") {
        zeroCount++;
      }
    }
    const replaced = string.replaceAll("0", "").length.toString(2);

    if (replaced !== "1") repeat(replaced);
  }

  answer = [repeatCount, zeroCount];
  return answer;
}

const S = "110010101001";
console.log(solution(S));
