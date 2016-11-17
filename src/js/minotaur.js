(function() {
  'use strict';

  window.zoo = window.zoo || {};
  window.zoo.Minotaur = Minotaur;
  var createCreature = window.zoo.Creature;

  var daedalus = new createCreature('daedalus', 1234);
  /**
   * This constructor creates a Minotaur
   * @param {string} name this is the name of the creature
   * @param {date} dob  this is the dob of the creature
   */
  function Minotaur(name, dob) {
    createCreature.apply( this, [name, dob] );
  }

  Minotaur.prototype = Object.create(createCreature.prototype);
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
