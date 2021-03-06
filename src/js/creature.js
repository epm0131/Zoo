(function() {
  'use strict';
  window.zoo = window.zoo || {};
  window.zoo.Creature = Creature;

  Creature.prototype.getAge = function getAge() {
    var currentDate = Date.now();
    console.log(currentDate);
    var creatureDob = this.dob;
    console.log(creatureDob);
  };

  /**
   * this is the constructor for setting up creature.
   * @param {string} name this is the name of the creature
   * @param {date} dob  this is the dob of the creature
   * @throws {TypeError} If the argument is not an array or number

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



}());
