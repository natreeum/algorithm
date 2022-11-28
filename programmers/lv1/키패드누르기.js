function solution(numbers, hand) {
  var answer = '';
  const handCoord = {
    left: [0, 3],
    right: [2, 3],
  };
  const keyCoord = new Map([
    [1, [0, 0]],
    [2, [1, 0]],
    [3, [2, 0]],
    [4, [0, 1]],
    [5, [1, 1]],
    [6, [2, 1]],
    [7, [0, 2]],
    [8, [1, 2]],
    [9, [2, 2]],
    [0, [1, 3]],
  ]);
  for (let i of numbers) {
    if (i == 1 || i == 4 || i == 7) {
      answer += 'L';
      handCoord.left = keyCoord.get(i);
    } else if (i == 3 || i == 6 || i == 9) {
      answer += 'R';
      handCoord.right = keyCoord.get(i);
    } else {
      const numCoord = keyCoord.get(i);
      if (
        Math.abs(handCoord.left[0] - numCoord[0]) +
          Math.abs(handCoord.left[1] - numCoord[1]) <
        Math.abs(handCoord.right[0] - numCoord[0]) +
          Math.abs(handCoord.right[1] - numCoord[1])
      ) {
        answer += 'L';
        handCoord.left = keyCoord.get(i);
      } else if (
        Math.abs(handCoord.left[0] - numCoord[0]) +
          Math.abs(handCoord.left[1] - numCoord[1]) ==
        Math.abs(handCoord.right[0] - numCoord[0]) +
          Math.abs(handCoord.right[1] - numCoord[1])
      ) {
        if (hand === 'right') answer += 'R';
        else answer += 'L';
        handCoord[hand] = keyCoord.get(i);
      } else {
        answer += 'R';
        handCoord.right = keyCoord.get(i);
      }
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
