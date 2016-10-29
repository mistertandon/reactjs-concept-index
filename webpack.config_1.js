/**
 * How to access locally installed <webpack-dev-server>
 * 
 * parvesh@parvesh-OptiPlex-390:/var/www/bluebirdjs$$(npm bin)/webpack-dev-server
 */
var path = require("path");
module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: 3468
    },
    target: "web",
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_module|brower_component)/,
                loader: "babel",
                query: {
                    presets: ["es2015"],
                    cacheDirectory: true
                },
                babelrc: false
            }
        ]
    },
    entry: {
        "webpack_transpiled/src/01_new_promise/010_new_promise.js": "./src/01_new_promise.js",
    },
    output: {
        filename: "[name].js",
        path: "./"
    }
};