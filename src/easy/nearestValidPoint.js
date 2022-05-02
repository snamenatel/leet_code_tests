// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
export const nearestValidPoint = function (x, y, points) {
  let index = -1;
  let minDistance = Infinity;
  const isValisPoint = ([px, py]) => {
    return px === x || py === y;
  };

  const distance = ([px, py]) => {
    return Math.abs(px - x) + Math.abs(py - y);
  };

  points.forEach((coord, idx) => {
    if (isValisPoint(coord)) {
      if (distance(coord) < minDistance) {
        minDistance = distance(coord);
        index = idx;
      }
    }
  });

  return index;
};
