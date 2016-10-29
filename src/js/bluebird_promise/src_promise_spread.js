
var Promise = require("bluebird");
var queue = [];

var promise1 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 5000, 'Promise numer 1');
});
var promise2 = new Promise(function (resolve, reject) {

    setTimeout(resolve , 3000, 'Promise numer 2');
});
var promise3 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 4000, 'Promise numer 3');
});

//Promise.all([promise1, promise2, promise3]).then(function (values) {
//    console.log(values);
//});
Promise.all([promise1, promise2, promise3]).spread(function (promise1Result, promise2Result, promise3Result) {

    console.log(promise1Result);
    console.log(promise2Result);
    console.log(promise3Result);
});