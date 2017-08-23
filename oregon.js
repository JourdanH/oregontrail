(function(){

  function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
  function Wagon(capacity){
    this.capacity = capacity;
    this.passengers = [];
  }

  function Traveler(name){
    this.name = name;
    this.amount = getRandom(1,100);
    this.isHealthy = true;
  }

  function makeTraveler(name) {
    return new Traveler(name)
  }

  function makeWagon(capacity){
    return new Wagon(capacity);
  }

  function eat(traveler) {
    if (traveler.amount >=20){ traveler.amount -=20}
    else if (traveler.amount <20){ traveler.isHealthy = false};
  }

  function hunt(traveler) {
    let success = getRandom(0,100);
    if (success >50) { return traveler.amount +=100}
  }

  function join(wagon, traveler){
  if (wagon.passengers.length < wagon.capacity)
  {wagon.passengers.push(traveler)}

  }

  function quarantine(wagon){
    for (let i=0; i<wagon.passengers.length; i++) {
      if (!wagon.passengers[i].isHealthy) {return true
      }
    }
    return false;
  }


  function food(wagon){
    let totalFood = 0;
      for (let i=0; i<wagon.passengers.length; i++) {
        totalFood +=wagon.passengers[i].amount;
      }return totalFood
  }

////////////////////////////


let traveler = makeTraveler('Henrietta');

let traveler2 = makeTraveler('Juan');

let wagon = makeWagon(5);
hunt(traveler);

eat(traveler2);
eat(traveler2);

join(wagon, traveler);


join(wagon, traveler2);

console.log(quarantine(wagon));
console.log(food(wagon));
})();
