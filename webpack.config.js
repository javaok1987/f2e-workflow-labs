module.exports = {
    entry: {
        bundle: './app/app.module.js'
    },
    output: {
        filename: './app/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css!autoprefixer"
        }]
    }
};
