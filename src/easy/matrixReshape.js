var matrixReshape = function (mat, r, c) {
  let flat = mat.flat();
  let cnt = Math.floor( flat.length / c);
  console.log(cnt);
  let res = Array(r).fill([]);
  let n = 0
  flat.forEach((element, idx) => {    
      if(n < cnt) {
        res[n].push(element);
      }
      
      n++;
      if(n === (cnt)) {
          n = 0;
      }
  });
  return res;
};

console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
