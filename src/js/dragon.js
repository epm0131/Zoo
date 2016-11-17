(function() {
  'use strict';

  window.zoo = window.zoo || {};
  window.zoo.Dragon = Dragon;

  var createCreature = window.zoo.Creature;

  var draco = new createCreature('draco', 1603);

  /**
   * This constructor creates a Dragon
   * @param {string} name this is the name of the creature
   * @param {date} dob  this is the dob of the creature
   */
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
