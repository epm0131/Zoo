(function() {
  'use strict';

  var expect = chai.expect;

  describe('Minions of the zoo', function () {
    it('should know the namespace exists', function() {
      expect(window.zoo).to.be.an('object');
    });

    describe('The constructor for setting up Creature', function() {
      it('should create a Creature', function() {
        expect(new window.zoo.Creature('Matt')).to.be.an('object');
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

  });
});
}());
