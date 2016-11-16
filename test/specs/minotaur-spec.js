(function() {
  'use strict';

  var expect = chai.expect;

  describe('Minions of the zoo', function () {
    it('should know the namespace exists', function() {
      expect(window.zoo).to.be.an('object');
    });

    describe('The constructor for setting up Creature', function() {
      it('should create a Creature', function() {
        expect(new window.zoo.Creature('Matt', 2000)).to.be.an('object');
    });

      it('should produce an error if no string is given', function() {
        try {
          new window.zoo.Creature(5);
          expect(true).to.be.false;
        } catch(err) {
          console.log(typeof err);
          expect(err).to.be.an.instanceof(Object);
          expect(err).to.be.an.instanceof(TypeError);
        }

      });
      it('should produce an error if no number is given', function() {
        try {
          new window.zoo.Creature('hello');
          expect(true).to.be.false;
        } catch(err1) {
          expect(err1).to.be.an.instanceof(Object);
          expect(err1).to.be.an.instanceof(TypeError);
          }
      });

      describe('The constructor for setting up minions', function() {
        it('should create a dragon', function() {
          expect(new window.zoo.Dragon('Ember', 10000)).to.be.an('object');
        });
        it('should create a minotaur', function() {
          expect(new window.zoo.Minotaur('Horns', 500)).to.be.an('object');
        });
      });  
  });
});
}());
