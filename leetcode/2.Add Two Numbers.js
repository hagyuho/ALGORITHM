/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let answer = [];
  let l1Num = "";
  let l2Num = "";
  let sum = 0;
  l1.forEach((element) => {
    l1Num = l1Num + element;
  });
  l2.forEach((element) => {
    l2Num = l2Num + element;
  });

  sum = parseInt(l1Num) + parseInt(l2Num);
  const strSum = sum + "";

  for (let i = 0; i < strSum.length; i++) {
    console.log(strSum[i]);
    answer.push(strSum[strSum.length - i - 1]);
  }
  return answer;
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));
