var path = require('path');

module.exports = {
    context: path.join(__dirname, 'Scripts/App'),
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'Webpack_Bundle'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:
                [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['react', ['es2015', { modules: false }]] },
                    },
                ],

            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/
            },
        ]
    }
};