const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.conf");

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    watchOptions: {
        aggregateTimeout: 600,
        ignored: /node_modules/,
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [],
});
