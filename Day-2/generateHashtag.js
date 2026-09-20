/*
create an function wich create the hastag with the given string and 
conditions : 
    string less then 280 input ,
    string should not empty,
    first letter of the each word should be capitalized,
    add # as the prefix
*/

const genHasTag = (str) => {
  if (str.trim().length === 0 || str.length > 280) {
    return false;
  }

  const words = str.split(" ");

  /*Method 1 :
    const capitalized = words.map((current) =>
      current.replace(current[0], current[0].toUpperCase()),
    );
  */

  /* 
    Method 2 :
   */
  const capitalized = words.map(
    (current) => current.charAt(0).toUpperCase() + current.slice(1),
  );

  const hash = `#${capitalized.join("")}`;

  return hash;
};
const str = "Hi iam rsp";
console.log(genHasTag(str));
