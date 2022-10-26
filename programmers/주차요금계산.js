function solution(fees, records) {
  var answer = [];
  var list = new Map();

  records.reverse().map((record) => {
    const key = record.split(" ")[1];
    const value = record.split(" ")[0];
    const action = record.split(" ")[2];
    if (!list.has(key)) {
      if (action === "IN") list.set(key, 1439 - timeToNum(value));
      if (action === "OUT") list.set(key, [0, timeToNum(value)]);
    } else {
      if (action === "OUT") list.set(key, [list.get(key), timeToNum(value)]);
      if (action === "IN")
        list.set(key, list.get(key)[0] + list.get(key)[1] - timeToNum(value));
    }
  });
  const sortedList = new Map([...list.entries()].sort());
  sortedList.forEach((item) => {
    answer.push(calculate(item, fees));
  });

  return answer;
}

const timeToNum = (time) => {
  const times = time.split(":");
  return parseInt(times[0]) * 60 + parseInt(times[1]);
};

const calculate = (time, fees) => {
  let sum = 0;
  if (time < fees[0]) {
    sum = fees[1];
  } else {
    const last =
      (time - fees[0]) % fees[2] === 0
        ? (time - fees[0]) / fees[2]
        : parseInt((time - fees[0]) / fees[2]) + 1;
    sum = fees[1] + last * fees[3];
  }
  return sum;
};

const f = [180, 5000, 10, 600];
const r = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(solution(f, r));
