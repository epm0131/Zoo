(function() {
  'use strict';

  var expect = chai.expect;

  describe('Minions of the zoo', function () {
    it('should know the namespace exists', function() {
      expect(window.zoo).to.be.an('object');
    });

    describe('The constructor for setting up Creature', function() {
      xit('should be an object', function() {
        expect(window.zoo.Creature).to.be.an('object');
      });
    });
  });

}());
