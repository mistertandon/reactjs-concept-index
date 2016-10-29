
var Promise = require("bluebird");

var some = Promise.some;
var promise1 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 5000, 'Promise numer 1');
});
var promise2 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 3000, 'Promise numer 2');
});

var variable3 = ['Node js', 'Hapi js'];

some([promise1, promise2, variable3], 2).spread(function(firstPromise, secondPromise){
    
    console.log(firstPromise);
    console.log(secondPromise);
    
});