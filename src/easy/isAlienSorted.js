export const isAlienSorted = function (words, order) {
  const chars = {};
  const getCharIdx = (char) => {
    if (chars.hasOwnProperty(char)) {
      return chars[char];
    }
    const idx = order.indexOf(char);
    chars[char] = idx;
    return idx;
  };

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (getCharIdx(words[i][j]) < getCharIdx(words[i + 1][j])) {
        break;
      } else if (getCharIdx(words[i][j]) === getCharIdx(words[i + 1][j])) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};
