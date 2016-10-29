
require("../../css/02_moments_css/moment_js_css.css");

define(["moment"], function (moment) {

    console.log('Current time is : '+moment().format('LLLL'));
});