function solution(Aarr, Barr) {
  const strongTo = {
    1: 3,
    2: 1,
    3: 2,
  };
  for (let i = 0; i < Aarr.length; i++) {
    if (strongTo[Aarr[i]] === Barr[i]) {
      console.log('A');
    } else if (Aarr[i] === Barr[i]) {
      console.log('D');
    } else {
      console.log('B');
    }
  }
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
