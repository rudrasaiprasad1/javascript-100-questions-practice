/*
check the sides and return 
if the triangle has 3 sides same then return "Equilateral"
if the triangle has 2 sides same then return "Isosceles"
if the triangle all sides are diffrent then return "Scalene"
*/

const checkTriangleType = (a, b, c) => {
  if (a === b && b === c) {
    return "Equilateral";
  }

  if (a === b || b === c || c === a) {
    return "scalene";
  }

  return "isosceles";
};

console.log(checkTriangleType(3, 2, 3));
