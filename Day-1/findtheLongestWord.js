const str = "i am the king of the universe";

const findtheLongestWord = (str) => {
  if (str.lenght === 0) {
    return false;
  }

  const words = str.split(" ");
  words.sort((a, b) => a.length - b.length);
  console.log(words.at(-1));

  /*
      or we can also write like this.
    words.sort((a, b) => b.length - a.length);
    console.log(words[0]);
  */
};

findtheLongestWord(str);
