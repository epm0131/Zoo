(function() {
  'use strict';

  window.zoo = window.zoo || {};

  function Creature(name, dob) {
    console.log(this);
    this.name = name || 'nameless';
    this.dob = dob || 'not alive';
  }

  var draco = new Creature('draco', 1603);

  function Dragon(name, dob) {
    Creature.apply( this, [name] );
    this.dob = dob;
  }

  Dragon.prototype = Object.create(Creature.prototype);
  Dragon.prototype.constructor = Dragon;

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