/*
    function takes and word and and a character and checks how many times it occurs and return the count.
    characters should be case sensitive
*/

const countChar = (str = "", char = null) => {
  if (str.trim().length === 0 || char === null) {
    return false;
  }

  const chars = str.split("");

  totalCount = chars.reduce((acc, current) => {
    if (current === char) {
      acc++;
    }
    return acc;
  }, 0);

  return totalCount;
};

const str = "MissIssippi";
console.log(countChar(str, "I"));
