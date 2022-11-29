/*
문제
어떤 큰 도화지에 그림이 그려져 있을 때, 그 그림의 개수와, 그 그림 중 넓이가 가장 넓은 것의 넓이를 출력하여라. 단, 그림이라는 것은 1로 연결된 것을 한 그림이라고 정의하자. 가로나 세로로 연결된 것은 연결이 된 것이고 대각선으로 연결이 된 것은 떨어진 그림이다. 그림의 넓이란 그림에 포함된 1의 개수이다.

입력
첫째 줄에 도화지의 세로 크기 n(1 ≤ n ≤ 500)과 가로 크기 m(1 ≤ m ≤ 500)이 차례로 주어진다. 두 번째 줄부터 n+1 줄 까지 그림의 정보가 주어진다. (단 그림의 정보는 0과 1이 공백을 두고 주어지며, 0은 색칠이 안된 부분, 1은 색칠이 된 부분을 의미한다)

출력
첫째 줄에는 그림의 개수, 둘째 줄에는 그 중 가장 넓은 그림의 넓이를 출력하여라. 단, 그림이 하나도 없는 경우에는 가장 넓은 그림의 넓이는 0이다.
*/

function solution(m, n, board) {
  // 2중 for문을 돌면서 요소가 1이고 방문하지 않았었다면 bfs
  // 누적갯수 ++
  // 붙어있는 1의 갯수 ++, visited에 curCoord를 push

  // 지도, 방문여부, queue
  const visited = [];
  const queue = [];
  let biggestBlockSize = 0;
  let blockCnt = 0;

  const findChildren = (y, x) => {
    const children = [];
    if (
      y > 0 &&
      board[y - 1][x] === 1 &&
      !visited.includes([y - 1, x].join(''))
    ) {
      children.push([y - 1, x]);
    }
    if (
      y < m - 1 &&
      board[y + 1][x] === 1 &&
      !visited.includes([y + 1, x].join(''))
    ) {
      children.push([y + 1, x]);
    }
    if (
      x > 0 &&
      board[y][x - 1] === 1 &&
      !visited.includes([y, x - 1].join(''))
    ) {
      children.push([y, x - 1]);
    }
    if (
      x < n - 1 &&
      board[y][x + 1] === 1 &&
      !visited.includes([y, x + 1].join(''))
    ) {
      children.push([y, x + 1]);
    }
    return [...children];
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1 && !visited.includes([i, j].join(''))) {
        blockCnt++;
        queue.push([i, j]);
        let blockSize = 0;
        while (queue.length !== 0) {
          const firstInQueue = queue.shift();
          let children = findChildren(firstInQueue[0], firstInQueue[1]);
          visited.push([firstInQueue[0], firstInQueue[1]].join(''));
          blockSize++;
          for (let k of children) {
            if (!visited.includes([k[0], k[1]].join(''))) {
              visited.push([k[0], k[1]].join(''));
              blockSize++;
            }
            queue.push([...k]);
          }
          console.log(queue);
        }
        biggestBlockSize =
          biggestBlockSize < blockSize ? blockSize : biggestBlockSize;
      }
    }
  }
  return [blockCnt, biggestBlockSize];
}

console.log(
  solution(3, 4, [
    [1, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);
