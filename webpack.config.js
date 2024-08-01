const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    resolve: { modules: [path.resolve(__dirname, './node_modules')] },
    target: 'web',
    entry: {
        poem: './common/js/poem.js',
        index: './common/js/index.js',
        glossary: './common/js/glossary.js',
        visindex: './common/js/visindex.js',
        textindex: './common/js/textindex.js'
    },
    /*plugins: [
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                loaders: [
                    {
                    test: /.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        plugins: ["@babel/plugin-proposal-class-properties"],

                        presets: ["es2015"]
                       }
                    },

                    {
                        test: /\.css$/,
                        loaders: ['style-loader', 'css-loader']
                    }
                ]
            }
        })
    ], 
    */
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                /node_modules/
                ],
                use: [
                { loader: "babel-loader" }
                ]
            },

            {
              test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ]
            },

            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            }
          ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    }
};
