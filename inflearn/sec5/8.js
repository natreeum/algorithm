const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

// hash, two pointer, sliding window
function solution(s, t) {
  let answer = 0;
  const tMap = new Map();
  for (let i of t) {
    if (tMap.has(i)) tMap.set(i, tMap.get(i) + 1);
    else tMap.set(i, 1);
  }

  let p1 = 0;
  for (let i = t.length; i <= s.length; i++) {
    const tmpMap = new Map();
    for (let j = p1; j < i; j++) {
      if (tmpMap.has(s[j])) tmpMap.set(s[j], tmpMap.get(s[j]) + 1);
      else tmpMap.set(s[j], 1);
    }
    if (isAnagram(tmpMap, tMap)) answer++;
    p1++;
  }

  return answer;

  function isAnagram(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [k, v] of map1) {
      if (!map2.has(k) || map2.get(k) !== v) return false;
    }
    return true;
  }
}

// Lecture code
function Lsolution(s, t) {
  const sMap = new Map();
  const tMap = new Map();
  let answer = 0;
  function checkMap(m1, m2) {
    if (m1.size !== m2.size) return false;
    for (let [k, v] of m1) {
      if (!m2.has(k) || m2.get(k) !== v) return false;
    }
    return true;
  }
  // set tMap
  for (let x of t) {
    if (tMap.has(x)) tMap.set(x, tMap.get(x) + 1);
    else tMap.set(x, 1);
  }
  // set sMap
  for (let i = 0; i < t.length - 1; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);
  }
  // sliding window && two pointer
  let p1 = 0;
  for (let i = t.length - 1; i < s.length; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);
    if (checkMap(sMap, tMap)) answer++;
    sMap.set(s[p1], sMap.get(s[p1]) - 1);
    if (sMap.get(s[p1]) === 0) sMap.delete(s[p1]);
    p1++;
  }
  return answer;
}

time("");
const s = "bacaAacba";
const t = "abc";
const res = Lsolution(s, t);
console.log(res);
timeEnd("");
