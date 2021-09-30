const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
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
    plugins: [new HtmlWebpackPlugin()],
};