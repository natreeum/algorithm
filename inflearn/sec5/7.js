// hash map
const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(a, b) {
  const aMap = new Map();
  const bMap = new Map();
  for (let i = 0; i < a.length; i++) {
    if (aMap.has(a[i])) aMap.set(a[i], aMap.get(a[i]) + 1);
    else aMap.set(a[i], 1);
    if (bMap.has(b[i])) bMap.set(b[i], bMap.get(b[i]) + 1);
    else bMap.set(b[i], 1);
  }
  for (let [key, val] of aMap) {
    if (bMap.get(key) !== val) return "NO";
  }
  return "YES";
}

function Lsolution(a, b) {
  const aMap = new Map();
  for (let i of a) {
    if (aMap.has(i)) aMap.set(i, aMap.get(i) + 1);
    else aMap.set(i, 1);
  }
  for (let i of b) {
    if (!aMap.has(i) || aMap.get(i) === 0) return "NO";
    else aMap.set(i, aMap.get(i) - 1);
  }
  return "YES";
}

time("");
const a = "AbaAeCe";
const b = "baeeACA";
const c = "abaCC";
const d = "Caaab";
const res = Lsolution(a, b);
log(res);
timeEnd("");
