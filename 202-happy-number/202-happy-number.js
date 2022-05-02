/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = (n) => {
  const list = new Set();
  let res = n.toString();
  while (res !== sum(res)) {
    res = sum(res);
    if (list.has(res)) break;
    list.add(res);
  }

  return res === "1";
};

function sum(n) {
  return n
    .split("")
    .reduce((acc, curr) => Number(acc) + Number(curr) ** 2, 0)
    .toString();
}