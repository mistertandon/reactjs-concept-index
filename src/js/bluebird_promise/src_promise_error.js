
var Promise = require("bluebird");

var promise1 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        if (true) {

            reject(new Error("Manually throw Syntax Error from <promise1>."));
        }


    }, 2000, 'Promise numer 1');
});

var promise2 = new Promise(function (resolve, reject) {

    setTimeout(resolve, 3000, 'Promise numer 2');
});


Promise.all([promise1, promise2]).then(function (values) {

    console.log(values);
}).catch(function (e) {

    console.log('This is a example of <catch> error message.');
    console.log('Error message : ' + e.message);
}).error(function (e) {

    console.log('This is a example of <error> message.');
    console.log('Error message : ' + e.message);
});