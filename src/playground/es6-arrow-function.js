const square = function(x) {
  return x * x
};
console.log(square(8));

const squareArrow = (x) => {
  return x * x
};
console.log(squareArrow(9));

const newSquareArrow = (x) => x * x;
console.log(newSquareArrow(7));

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}
console.log(getFirstName('Jan Weaver'));

const newGetFirstName = (fullName) => fullName.split(' ')[0];
console.log(newGetFirstName('Dave Weaver'));
