const path = require("path");
const mix = require("laravel-mix");

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve("resources/js"),
        },
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
        ],
    },
    devtool: mix.inProduction() ? "" : "inline-source-map",
};
