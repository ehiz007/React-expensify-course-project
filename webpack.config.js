const path = require('path'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')
    return {
        entry : './src/app.js', //{app:},
        output: {
            path: path.join(__dirname,'/public/scripts'),
            filename:'app-bundle.js',
            
        },
        module:{
            rules:[{
                loader:'babel-loader',
                exclude:/node_modules/,
                test:/\.js$/
            },{
                // ['style-loader','css-loader','sass-loader']
                test:  /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                            sourceMap: true
                        }
                         },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }),
                
            }]
        },

        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : "cheap-module-eval-source-map",
        devServer:{
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            // publicPath: '/',
        }
    }
}