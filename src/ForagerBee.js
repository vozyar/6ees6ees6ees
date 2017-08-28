
class ForagerBee extends Bee{
  constructor(job, age) {
    super(job, age);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  //since treasureChest is an array, we need to PUSH treasure into it
  forage() {
    this.treasureChest.push('treasure');
  }
};
