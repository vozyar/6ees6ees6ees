//class Bee is an extension of Grub class
class Bee extends Grub {
  //Constructor function takes two parameters, the ones that are different from Grub
  constructor(age, color) {
    //Super also takes two parameters, the same as we passed into constructor
    super(age, color); //Super represents Grub here
    this.age += 5; //age will be 5 for this bee
    this.color = 'yellow';
    this.job = 'Keep on growing'; //brand new property (not on Grub)
  }
};
