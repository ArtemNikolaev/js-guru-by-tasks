const assert = require('assert');
const shared = require('./shared.array');

describe('tasks/js-api/array/map.js \n [].map', function() {
    shared.hooks();

    it('should throw if no cb', function() {
        assert.throws(() => [].map());
    });

    it('should return an array, but not the same array', function() {
        assert.ok(
            Array.isArray(
                [].map(()=>{}),
            ),
        );
        const testCase = [];

        assert.ok(
            testCase !== testCase.map(()=>{}),
        );
    });

    describe('cb', function() {
        it('first argument should be value', function() {
            const testCase = [1,2,3];
            assert.deepEqual(testCase, testCase.map(el=>el));
        });

        it('second argument should be index', function() {
            const testCase = [0,1,2,3];
            assert.deepEqual(testCase, testCase.map((el,i)=>i));
        });

        it('thire argument should be array itself', function() {
            const testCase = [0,1,2,3];
            assert.ok(
                testCase
                    .map((el,i,ar)=>ar)
                    .every(el=>el===testCase));
        });
    });

    it('thisArg should be context for cb', function() {
        assert.deepEqual(
            [1,2,3],
            [0,1,2].map(
                function(el) { return el+this.x },
                {x:1}
            )
        );
    });
});