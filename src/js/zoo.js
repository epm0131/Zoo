(function() {
  'use strict';

  function Creature(name, dob) {
    console.log('inside creature', this);
    this.name = name || 'nameless';
    this.dob = dob || 'not alive';
  };

  var draco = new Creature('draco', 'dob');
  // var daedalus = new Creature('daedalus', 'dob');

  function Dragon(name, dob) {
    Creature.apply( this, [name] );

  };

  // function Minotaur(name, dob) {
  //   this.name = name || 'nameless';
  // };

  Dragon.prototype = Object.create(Creature.prototype);
  Dragon.prototype.constructor = Dragon;

  var dragon = new Dragon('draco', 'dob');
  // var daedalus = new Minotaur('daedalus', 'dob');

  console.log('draco:', draco);
  // console.log('daedalus:', daedalus);


}());
