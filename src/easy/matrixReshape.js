var matrixReshape = function (mat, r, c) {
  const flat = mat.flat();
  const res = [];
  let idx = 0;
  if(r * c !== flat.length) {
    return mat;
  }
  for(let i = 0; i < r; i++) {
    res[i] = [];
    for(let j = 0; j < c; j++) {
      res[i][j] = flat[idx];
      idx++
    }
  }
  return res;
};
