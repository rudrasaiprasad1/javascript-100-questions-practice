/*
create an function wich create the hastag with the given string and 
conditions : 
    string less then 280 input ,
    string should not empty,
    first letter of the each word should be capitalized.
*/

const genHasTag = (str) => {
  if (str.trim().length === 0 || str.length > 280) {
    return false;
  }

  const words = str.split(" ");
  const capitalized = words.map((current) =>
    current.replace(current[0], current[0].toUpperCase()),
  );

  const hash = capitalized.join("");

  return hash;
};
const str = "Hi iam rsp";
console.log(genHasTag(str));
