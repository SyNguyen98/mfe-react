const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = () => ({
    output: {
        publicPath: "https://salmon-island-072e10b00.5.azurestaticapps.net/",
    },

    mode: "production",

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[contenthash:8].[ext]',
                                    esModule: false,
                                },
                            },
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jsx)?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-env",
                        ["@babel/preset-react", {runtime: "automatic"}]
                    ],
                }
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "mfe_react",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./mountReactComponent": "./src/components/ReactComponent",
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        })
    ],
});
