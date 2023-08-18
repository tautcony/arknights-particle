const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseWebpackConfig = require("./webpack.conf");

module.exports = merge(baseWebpackConfig, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
            terserOptions: {
                output: {
                    // eslint-disable-next-line camelcase
                    ascii_only: true,
                },
            },
        })],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
    ],
});
