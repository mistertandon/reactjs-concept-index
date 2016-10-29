
var Promise = require("bluebird");

function promise1Func() {

    return new Promise(function (resolve, reject) {

        setTimeout(resolve, 2000, 'Promise numer 1');
    });

}
function promise2Func() {

    return new Promise(function (resolve, reject) {

        setTimeout(resolve, 3000, 'Promise numer 2');
    });
}
function promise3Func() {

    return new Promise(function (resolve, reject) {

        setTimeout(resolve, 4000, 'Promise numer 3');
    });
}

Promise.props({
    promise1Prop: promise1Func(),
    promise2Prop: promise2Func(),
    promise3Prop: promise3Func()
}).then(function(allPromiseValues){
    
    console.log(allPromiseValues);
});