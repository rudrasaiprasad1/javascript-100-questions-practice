const str = "i am the king of the universe";

const findtheLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  const words = str.split(" ");

  /*
  method 1 

  words.sort((a, b) => a.length - b.length);
  return words.at(-1);
  */

  /*
  method 2
    words.sort((a, b) => b.length - a.length);
    return words[0];
  */

  /*
    method 3 
    
    
    */
  const thatWord = words.reduce((acc, current) =>
    current.length > acc.length ? current : acc,
  );
  return thatWord;
};

console.log(findtheLongestWord(str));
