function solution(num, arr) {
  let visibleStudent = [];
  visibleStudent.push(arr[0]);
  // neo형 하위~~!!
  // 댕댕형 하위~~!!
  for (let i = 1; i < num; i++) {
    let flag = true;
    for (let j = 0; j < i; j++) {
      if (arr[i] <= arr[j]) {
        flag = false;
      }
    }
    if (flag) {
      visibleStudent.push(arr[i]);
    }
  }
  return visibleStudent.length;
}

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
