// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.numberOfCups = 0;
    this.insertedMoney = 0;
    this.totalCashInMachine = 0;
    // these two properties in gram
    this.amountOfCoffee = 0;
    this.amountOfMilkPowder = 0;
    this.amountOfSugar = 0;
    // some settings
    this.pricePerCup = 20; // in SEK
    
    this.coffeePerCup = 13; // in grams
    this.milkPerCappuccino = 10; // in grams
    this.milkPerCaffeLatte = 15; // in grams
    this.sugarPerCup = 7 // in grams
    
  }

  // maintenance

  plugIn() {
    this.pluggedIn = true;
  }

  connectToWater() {
    this.connectedToWater = true;
  }

  fillWithCoffee(amount) {
    // add amount to total amount of 
    // ground coffee in the machine
    this.amountOfCoffee += amount;
  }

  fillWithCups(amount) {
    // add amount of cups to the
    // total number of cups in the machine
    this.numberOfCups += amount;
  }

  fillWithMilkPowder(amount) {

    
    

  }

  fillWithSugar(amount) {
    

  }



  // user choices

  insertMoney(inserted) {
    // add inserted money to total
    // money inserted so far
    if (typeof inserted !== 'number') {
      throw (new Error('You must insert money not ' + nonMoney));
    }
    this.insertedMoney += inserted;
  }

  //Buttons

  pressAmericanoButton() {
    
  }

  pressCappuccinoButton() {
    
  }

  pressCaffeLatteButton() {
    
  }

  pressSugarButton() {
    
  }

  pressCancelSugarButton() {
    
  }



  pressStartButton() {
    // here we will need to call
    // a number of internal methods
    // (se below)
    // in the correcto order
    // and abort if not enough coffee etc

    // FOR NOW JUST RETURN "here's your coffee"
    // if there is enough money inserted
    if (this.insertedMoney >= this.pricePerCup) {
      return "here's your coffee";
    }
  }

  // internals
  dispenseCup() {

  }

  brewAmericano() {
    // one cup at a time
    // heat water... etc
  }
  
  brewCappuccino() {
    
  }

  brewCaffeLatte() {
    
  }

  addSugar(sugarPerCup) {
     
   }

  dispenseAmericano() {

  }

  dispenseCappuccino() {
    
  }
  dispenseCaffeLatte() {
    

  }


  checkIfEnoughCoffeeForACup() {
    return this.amountOfCoffee >= this.coffeePerCup;
  }

  checkIfEnoughMilkForCappuccino() {
    
  }

  checkIfEnoughMilkForCaffeLatte() {
    

  }

  checkIfAnyCupsLeft() {
    return this.numberOfCups >= 1;
  }

}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;