const path = require("path");
const WebpackBar = require("webpackbar");
const ESLintPlugin = require("eslint-webpack-plugin");

const babelConfig = {
    sourceType: "module",
    presets: [
        [
            "@babel/preset-env",
            {
                corejs: 3,
                useBuiltIns: "usage",
                modules: "commonjs",
            },
        ],
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                corejs: 3,
                useESModules: false,
            },
        ],
    ],
};

module.exports = {
    mode: "production",
    target: "browserslist",
    entry: path.join(__dirname, "..", "arknights.ts"),
    output: {
        filename: "dist/arknights.min.js",
        path: path.resolve(__dirname, ".."),
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    },
    node: {
        // Buffer: false,
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                include: path.resolve(__dirname, "..", "arknights.ts"),
                use: [
                    {
                        loader: "babel-loader?cacheDirectory",
                        options: babelConfig,
                    },
                    {
                        loader: "ts-loader",
                        options: {},
                    },
                ],
            },
            {
                test: /.js$/,
                use: [
                    {
                        loader: "babel-loader?cacheDirectory",
                        options: babelConfig,
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new WebpackBar(),
        new ESLintPlugin({}),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    }
};
