const methodMapping = ['map', 'forEach'];

const selfWritedMapping = (() => {
    const result = {};
    methodMapping.forEach(methodName => result[methodName] = require(`../../../tasks/js-api/array/${methodName}`));
    return result;
})();

const prototypeMapping = (() => {
    const result = {};
    methodMapping.forEach(methodName => result[methodName] = Array.prototype[methodName]);
    return result;
})();

module.exports = {
    hooks: () => {
        beforeEach(function () {
            Object.assign(Array.prototype, selfWritedMapping);
        });

        afterEach(function () {
            Object.assign(Array.prototype, prototypeMapping);
        });
    },
    callTimes: function () {
        let counter = 0;
        return function() {
            return counter++;
        }
    }
}
