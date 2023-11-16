var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    mode:"development",
    module: {
        rules:[
            {
                test: /\.css$/i,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({title:"GAURAV APPLICATION"})
    ]
}

module.exports = config;