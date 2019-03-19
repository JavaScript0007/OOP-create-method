let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: () => "This dog has " + dog.numLegs + " legs."
  // if I want to use this instead of dog reference I would have to use funciton word like this:
  // sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

console.log(dog.sayLegs())
