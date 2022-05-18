const checkStraightLine = function (c) {
  if (c.lenght === 2) return true;
  const l = c.length;

  for (let i = 1; i < l - 1; i++) {
    if (!isStraight(c[i - 1], c[i], c[i + 1])) {
      return false;
    }
  }

  return true;
};

function isStraight([x1, y1], [x2, y2], [x3, y3]) {
  if ((x1 === x2 && x1 === x3) || (y1 === y2 && y1 === y3)) {
    return true;
  }
  const z1 = x2 - x1;
  const z2 = y2 - y1;
  if (!z1 || !z2) {
    return (
      Math.abs(x2 - x1) === Math.abs(x3 - x1) &&
      Math.abs(y2 - y1) === Math.abs(y3 - y1)
    );
  }
  return (x3 - x1) / (x2 - x1) === (y3 - y1) / (y2 - y1);
}

