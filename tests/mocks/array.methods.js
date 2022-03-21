const map = [].map;

module.exports = {
    before: () =>  delete Object.getPrototypeOf([]).map,
    after: () => Object.getPrototypeOf([]).map = map,
    setMethod: (methodName, method) => Object.getPrototypeOf([])[methodName] = method,
}