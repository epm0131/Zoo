(function() {
  'use strict';

  function Creature(name, dob) {
    console.log(this);
    this.name = name || 'nameless';
    this.dob = dob || 'not alive';
  };

  var draco = new Creature('draco', 1603);
  // var daedalus = new Creature('daedalus', 'dob');

  function Dragon(name, dob) {
    Creature.apply( this, [name] );
    this.dob = dob;

  };
  // function Minotaur(name, dob) {
  //   this.name = name || 'nameless';
  // };

  Dragon.prototype = Object.create(Creature.prototype);
  Dragon.prototype.constructor = Dragon;

  Dragon.prototype.layEgg = function layEgg() {
    var babyDragon = new Dragon('drago', 2016);
    return babyDragon;
  };

  Dragon.prototype.breathFire = function breathFire() {
    return 'Fire!!!!!!!!!!!!';
  }

  var dragon = new Dragon('draco', 1603);
  // var daedalus = new Minotaur('daedalus', 'dob');

  console.log('draco:', draco);
  console.log(dragon.layEgg());
  console.log(dragon.breathFire());


  // console.log('daedalus:', daedalus);


}());
