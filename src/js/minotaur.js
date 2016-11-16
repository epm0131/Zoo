(function() {
  'use strict';

  window.zoo = window.zoo || {};
  window.zoo.Creature = Creature;
  window.zoo.Minotaur = Minotaur;
  /**
   * this is the constructor for setting up creature.
   * @param {string} name this is the name of the creature
   * @param {date} dob  this is the dob of the creature
   */
  function Creature(name, dob) {

    if(typeof(name) !== 'string') {
      var err = new TypeError('Hello....You should give a string');
      throw err;
    }

    if(typeof(dob) !== 'number') {
      var err1 = new TypeError('Hello....You should give a number');
      throw err1;
    }
    console.log(this);
    this.name = name || 'nameless';
    this.dob = dob || 'not alive';
  }

  var daedalus = new Creature('daedalus', 1234);

  function Minotaur(name, dob) {
    Creature.apply( this, [name, dob] );
  }

  Minotaur.prototype = Object.create(Creature.prototype);
  Minotaur.prototype.constructor = Minotaur;
  Minotaur.prototype.breed ='Minotaur';


  Minotaur.prototype.giveBirth = function giveBirth() {
    var babyMinotaur = new Minotaur('minitaur', 2016);
    return babyMinotaur;
  };

  Minotaur.prototype.charge = function charge() {
    return 'Charge!!!!!!!!!!!!';
  };


  var minotaur = new Minotaur('daedalus', 1234);

  console.log('daedalus:', daedalus);
  console.log(minotaur.giveBirth());
  console.log(minotaur.charge('ouch that hurt!'));

}());
