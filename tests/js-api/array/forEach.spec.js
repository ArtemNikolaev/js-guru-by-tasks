const assert = require('assert');
const { hooks }= require('./shared.array');

describe.only('tasks/js-api/array/forEach.js \n [].forEach', function() {
    hooks();

    it('should throw if no cb', function() {
        assert.throws(() => [].forEach());
    });

    it('should return undefined', function() {
        const testCases = [
            [],
            [1,2,3],
            [0,1,2,3],
            [Symbol()],
        ]

        for (let i = 0; i < testCases.length; i++) {
            assert.equal(testCases[i].forEach(()=>{}), undefined);
        }
    });

/*
    describe('cb', function() {
        it('first argument should be value', function() {
            const testCase = [1,2,3];
            assert.deepEqual(testCase, testCase.forEach(el=>el));
        });

        it('second argument should be index', function() {
            const testCase = [0,1,2,3];
            assert.deepEqual(testCase, testCase.forEach((el,i)=>i));
        });

        it('thire argument should be array itself', function() {
            const testCase = [0,1,2,3];
            assert.ok(
                testCase
                    .forEach((el,i,ar)=>ar)
                    .every(el=>el===testCase));
        });
    });
*/

/*
    it('thisArg should be context for cb', function() {
        assert.deepEqual(
            [1,2,3],
            [0,1,2].forEach(
                function(el) { return el+this.x },
                {x:1}
            )
        );
    });
*/
});