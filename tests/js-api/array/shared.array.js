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
        beforeEach(function() {
            console.log(selfWritedMapping, require(`../../../tasks/js-api/array/forEach`));
            Object.assign(Array.prototype, selfWritedMapping);
        });

        afterEach(function() {
            Object.assign(Array.prototype, prototypeMapping);
        });
    }
}