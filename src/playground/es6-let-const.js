var nameVar = 'Andrew';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block level scope
function getPetName() {
  const petName = 'Hal';
  return petName;
}
console.log('getPetName', getPetName());

var fullName = 'Steve Loar';
if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log('firstName: ', firstName);
}
console.log('firstName: ', firstName);

