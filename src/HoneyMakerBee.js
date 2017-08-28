//class HoneyMakerBee is a subclass of Bee
class HoneyMakerBee extends Bee {
  //constructor take two parameters, the ones that are different from Bee
  constructor(job, age) {
    //Super takes two parameters, the same as constructor
    super(job, age);
    this.honeyPot = 0;
    this.age += 5;
    this.job = 'make honey';
  }
  makeHoney() {
    this.honeyPot += 1;
  }
  giveHoney() {
    this.honeyPot -= 1;
  }
};
