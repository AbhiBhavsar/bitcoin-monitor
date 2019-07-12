const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './index.html',
    filename: './index.html'
    // favicon: ''
});

const copyWebpackPlugin = new CopyWebpackPlugin([
    { from: './index.css', to: './index.css' }
]);

// const preloadWebpackPlugin = new PreloadWebpackPlugin({
//     rel: 'preload',
//     as: 'font'
// });

// const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();

module.export = (/* env */) => {
    return ({
        entry: [
            './index.js',
            './styles/base.css'
        ],
        
        output: {
            path: resolve(__dirname, 'dist'),
            filename: "bundle.[name].[hash:8].js",
            publicPath: '/'
        },

        context: resolve(__dirname, 'src'),

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,               
                    use: ['babel-loader', 'eslint-loader']
                },

                {
                    test: /\.scss$|.css$/,
                    use: ['style-loader', 'sass-loader', 'css-loader']
                },

                {
                    test: /\.(png|jpg|jpeg|ico|gif)$/,
                    use: [{ loader: 'file-loader?name=images/[name].[ext]' }]
                },

                {
                    test: /\.(mp3|pdf)$/,
                    use: [{ loader: 'url-loader?limit=15000&name=media/[hash].[ext]' }]
                },

                {
                    test: /\.mp4$/,
                    use: [{ loader: 'url-loader?limit=15000&name=videos/[name].[ext]' }]
                },

                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{ loader: 'url-loader?limit=15000&name=fonts/[hash].[ext]' }]
                }
            ]
        },

        plugins: [
            htmlWebpackPlugin,
            copyWebpackPlugin,
             // new webpack.DefinePlugin({ 'process.env.API_URL': JSON.stringify(`${env.API_URL}`) }),
            // new webpack.DefinePlugin({ 'process.env.AUTH': JSON.stringify(`${env.AUTH}`) }),
            // preloadWebpackPlugin,
            // bundleAnalyzerPlugin
        ]
    });
};
