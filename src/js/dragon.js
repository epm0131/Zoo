(function() {
  'use strict';

  window.zoo = window.zoo || {};
  window.zoo.Dragon = Dragon;
  var createCreature = window.zoo.Creature;

  createCreature.prototype.getAge = function getAge() {
    var currentDate = Date.now();
    console.log(currentDate);
    var creatureDob = this.dob;
    console.log(creatureDob);
  };

  var draco = new createCreature('draco', 1603);

  draco.getAge();

  function Dragon(name, dob) {
    createCreature.apply( this, [name, dob] );
  }

  Dragon.prototype = Object.create(createCreature.prototype);
  Dragon.prototype.constructor = Dragon;
  Dragon.prototype.breed ='Dragon';

  Dragon.prototype.layEgg = function layEgg() {
    var babyDragon = new Dragon('drago', 2016);
    return babyDragon;
  };

  Dragon.prototype.breathFire = function breathFire() {
    return 'Fire!!!!!!!!!!!!';
  };

  var dragon = new Dragon('draco', 1603);

  console.log('draco:', draco);
  console.log(dragon.layEgg());
  console.log(dragon.breathFire('ouch it burns!'));

}());
