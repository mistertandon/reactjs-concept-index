const PROMISE = require("bluebird");

var promise1 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 5000, 'Promise numer 1');
});
var promise2 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 3000, 'Promise numer 2');
});
var promise3 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 4000, 'Promise numer 3');
});

PROMISE.mapSeries([promise1, promise2, promise3], function (item, index, length) {

    console.log(item);
    console.log(index);
    console.log(length);

});