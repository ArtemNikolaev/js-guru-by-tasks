const map = require('../../../tasks/js-api/array/map');
const {before, after, setMethod} = require('../../mocks/array.methods');

describe('[].map', function() {
    beforeEach(function() {
        before();
        setMethod('map', map);
    });

    afterEach(function() {
        after();
    });

    it('should return an array', function() {
        // check that resulted array is an separate instance
    });

    describe('cb', function() {
        it('first argument should be value', function() {

        });

        it('second argument should be index', function() {

        });

        it('thire argument should be array itself', function() {

        });
    });

    it('thisArg should be context for cb', function() {

    });

    it('should throw if no cb', function() {

    });
});