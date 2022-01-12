const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        hot:true, // for hot reload
        open:true // replacement of --open in command in package.json
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name':JSON.stringify('Development')
        }),
        new ReactRefreshWebpackPlugin()
    ]
}