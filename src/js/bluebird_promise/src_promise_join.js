
var Promise = require("bluebird");

var Join = Promise.join;
var promise1 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 5000, 'Promise numer 1');
});
var promise2 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 3000, 'Promise numer 2');
});

var variable3 = ['Node js', 'Hapi js'];

Join(promise1, promise2, variable3, function (promise1Result, promise2Result, variable3Result) {

    console.log(promise1Result);
    console.log(promise2Result);
    console.log(variable3Result);
});