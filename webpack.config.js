module.exports = {
    entry: './assets/App.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    }
}
devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
}
module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015']
        }
    }]
}
