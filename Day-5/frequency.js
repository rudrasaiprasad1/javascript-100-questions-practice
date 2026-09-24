const str = "Programmer";

const findfreq = (str = "") => {
  if (str.trim().length === 0) {
    return false;
  }
  var charts = {};
  for (const char of str) {
    charts[char] = (charts[char] || 0) + 1;
  }
  return charts;
};

console.log(findfreq(str));
