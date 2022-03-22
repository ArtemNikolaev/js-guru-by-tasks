const assert = require('assert');
const { hooks, callTimes }= require('./shared.array');

describe('tasks/js-api/array/forEach.js \n [].forEach', function() {
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

    describe.only('cb', function() {
        it('should be called for every el', function () {
            const testCases = [
                [],
                [1,2,3],
                [0,1,2,3],
                [Symbol()],
            ]

            for (let i = 0; i < testCases.length; i++) {
                const counter = callTimes();
                testCases[i].forEach(counter);


                assert.equal(counter(), testCases[i].length);
            }
        });

        /*it('first argument should be value', function() {
            const testCase = [1,2,3];
            assert.deepEqual(testCase, testCase.forEach(el=>el));
        });*/

        /*it('second argument should be index', function() {
            const testCase = [0,1,2,3];
            assert.deepEqual(testCase, testCase.forEach((el,i)=>i));
        });*/

        /*it('thire argument should be array itself', function() {
            const testCase = [0,1,2,3];
            assert.ok(
                testCase
                    .forEach((el,i,ar)=>ar)
                    .every(el=>el===testCase));
        });*/
    });

    it('thisArg should be context for cb', function() {
        const testCases = [
            [],
            [1,2,3],
            [0,1,2,3],
            [Symbol()],
        ]

        for (let i = 0; i < testCases.length; i++) {
            const counter = callTimes();
            testCases[i].forEach(
                function() { this.counter(); },
                { counter },
            );


            assert.equal(counter(), testCases[i].length);
        }
    });
});