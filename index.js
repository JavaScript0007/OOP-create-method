let dog = {
  name: "Spot",
  numLegs: 4,
  // sayLegs: () => "This dog has " + dog.numLegs + " legs."
  // if I want to use this instead of dog reference I would have to use funciton word like this:
  sayLegs: function() {return "Animal has " + this.numLegs + " legs.";}
};

// here I use this to access method sayLegs, it avoids confusion that we would have with dog.sayLegs
const cat = dog

console.log(cat.sayLegs())
