const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: "./src/index.js",
    output:{
        filename:"main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "production",

    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader" ,"css-loader"],

            },
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
              },
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "index.html"),
        }),
      ],
    // plugins: [new HtmlWebpackPlugin({filename : "index.html"})],
    // devServer: {
    //     static: {
    //       directory: path.join(__dirname, 'dist'),
    //     },
    //     index:"index.html",
    //     port: 5200,
    //   },
};