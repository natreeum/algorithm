function solution(arr) {
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const answer = [];
  for (let i of arr) {
    const reversed = Number(i.toString().split("").reverse().join(""));
    if (isPrime(reversed)) {
      answer.push(reversed);
    }
  }
  return answer;
}

console.time("solution");
const nums = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(nums));
console.timeEnd("solution");
