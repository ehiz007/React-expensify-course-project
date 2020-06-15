const path = require('path');

module.exports = {
    entry : {app:'./src/app.js'},
    output: {
        path: path.join(__dirname,'/public/scripts'),
        filename:'[name]-bundle.js',
        
    },
    module:{
        rules:[{
            loader:'babel-loader',
            exclude:/node_modules/,
            test:/\.js$/
        },{
            use:['style-loader','css-loader','sass-loader'],
            test:/\.s?css$/
        }]
    },
    devtool:"cheap-module-eval-source-map",
    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true,
        publicPath: '/',
    }
}