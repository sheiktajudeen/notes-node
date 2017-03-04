var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Sheik',
  sayHi : () => {
    console.log(`Hi. I am ${this.name}`);
  },
  sayHiAlt(){
    console.log(`Hi. I am ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt();
