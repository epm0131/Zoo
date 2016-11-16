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

(function() {
  'use strict';

  window.zoo = window.zoo || {};
  window.zoo.Creature = Creature;
  /**
   * this is the constructor for setting up creature.
   * @param {string} name this is the name of the creature
   * @param {date} dob  this is the dob of the creature
   */
  function Creature(name, dob) {
    console.log(this);
    this.name = name || 'nameless';
    this.dob = dob || 'not alive';
  }

  var daedalus = new Creature('daedalus', 1234);

  function Minotaur(name, dob) {
    Creature.apply( this, [name] );
    this.dob = dob;
  }

  Minotaur.prototype = Object.create(Creature.prototype);
  Minotaur.prototype.constructor = Minotaur;

  Minotaur.prototype.giveBirth = function giveBirth() {
    var babyMinotaur = new Minotaur('minitaur', 2016);
    return babyMinotaur;
  };

  Minotaur.prototype.charge = function charge() {
    return 'Charge!!!!!!!!!!!!';
  };

  var minotaur = new Minotaur('daedalus', '1234');

  console.log('daedalus:', daedalus);
  console.log(minotaur.giveBirth());
  console.log(minotaur.charge('ouch that hurt!'));

}());
