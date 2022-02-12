const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
// mix.sass('resources/sass/app.scss','public/css');

mix.js("resources/js/app.js", "public/js")
    .react()
    .copy(
        "vendor/css/node_modules/normalize.css/normalize.css",
        "public/css/vendor/normalize.css"
    )
    .copy("vendor/css/grid.css", "public/css/vendor/grid.css")
    .copy("vendor/css/animate.css", "public/css/vendor/animate.css")
    .copy("vendor/css/ionicons.min.css", "public/css/vendor/ionicons.min.css")
    .copyDirectory("resources/images", "public/images")
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
    ])
    .webpackConfig(require("./webpack.config"));

if (mix.inProduction()) {
    mix.version();
}

mix.browserSync({
    open: false,
    watch: true,
    proxy: "http://127.0.0.1:8000",
    files: [
        "public/js/**/*",
        "public/css/**/*",
        "public/**/*.+(html|php)",
        "resources/views/**/*.php",
    ],
});
