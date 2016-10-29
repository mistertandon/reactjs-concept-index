
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

    console.log("=================================================================================");
    console.log("");

    console.log('This is a example of <catch> error message.');
    console.log('Error message : ' + e.message);
}).finally(function (value) {

    console.log("=================================================================================");
    console.log("");

    console.log("This need to be execute whether any error occured OR not during existing promises.");
    console.log(value);
});