const addOld = function (a, b) {
  console.log( arguments );
  return a + b;
}
console.log(addOld(51, 1, 1001) );

const add = (a, b) => {
  // error happens here
  // console.log( arguments );
  return a + b;
}
console.log(add(51, 1, 1001) );

const userOld = {
  name: 'Steve',
  cities: ['Cincinnati', 'Dayton'],
  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function (city) {
      // error happens here
      console.log(this.name + ' has lived in ' + city);
    })
  }
}
// userOld.printPlacesLived();

const user = {
  name: 'Steve',
  cities: ['Cincinnati', 'Dayton'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);

    // this.cities.forEach( (city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // })
  }
}
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [3,6,12,44],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
}
console.log(multiplier.multiply());

