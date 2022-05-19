var freqAlphabets = function(s) {
    const nums = s.match(/((?:\d{2}(?=#))|(?:\d{1}))/g).map(el => +el+96);
    return String.fromCharCode(...nums);
};
