function solution(n, left, right) {
  //   var answer = new Array(n).fill(0).map(() => new Array(n));
  var integratedArr = [];
  // make matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const filledNum = i >= j ? i + 1 : j + 1;
      integratedArr.push(filledNum);
      //   answer[i][j] = filledNum;
    }
  }

  //make integratedArr
  //   for (let i = 0; i < answer.length; i++) {
  //     integratedArr.push(...answer[i]);
  //   }
  const newRight = integratedArr.length > right ? right + 1 : right;
  const slicedArr = integratedArr.slice(left, newRight);

  return slicedArr;
}

console.log(solution(3, 2, 5));

function solution2(n, left, right) {
  let arr = [];

  for (let i = left; i <= right; i++) {
    let j = Math.floor(i / n) - (i % n);
    j = j < 0 ? 0 : j;
    arr.push((i % n) + 1 + j);
  }

  return arr;
}
