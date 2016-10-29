var config = {
    devServer: {
        host: '127.0.0.1',
        port: 3468
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /(node_modules|bower_component)/, loader: "jshint-loader"}
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_component)/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.css$/, exclude: /(node_modules|bower_component)/, loaders: ["style-loader", "css-loader"]}
        ]
    },
    devtool: "source-map"
};

var bluebirdPromise = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise: ["./src/js/bluebird_promise/src_promise"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseArray = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_spread: ["./src/js/bluebird_promise/src_promise_spread"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseError = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_error: ["./src/js/bluebird_promise/src_promise_error"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseFinally = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_finally: ["./src/js/bluebird_promise/src_promise_finally"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseJoin = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_join: ["./src/js/bluebird_promise/src_promise_join"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseProps = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_props: ["./src/js/bluebird_promise/src_promise_props"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseMap = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_map: ["./src/js/bluebird_promise/src_promise_map"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseMapSeries = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_map_series: ["./src/js/bluebird_promise/src_promise_map_series"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseMapEach = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_each: ["./src/js/bluebird_promise/src_promise_each"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

var bluebirdPromiseMapReduce = Object.assign(
        {},
        config,
        {
            entry: {
                dist_bb_promise_reduce: ["./src/js/bluebird_promise/src_promise_reduce"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });

/**
 
 bluebirdPromise,
 bluebirdPromiseArray,
 bluebirdPromiseError,
 bluebirdPromiseFinally,
 bluebirdPromiseJoin,
 bluebirdPromiseProps,
 bluebirdPromiseMap,
 bluebirdPromiseMapSeries,
 bluebirdPromiseMapEach
 
 */

module.exports = [
    bluebirdPromiseMapReduce
];