const pkg = require('./package.json');

module.exports = {
    entry :'./src/index.js',
    output:{
        filename: pkg.main,
        library:'',
        libraryTarget:'commonjs'
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_moudles/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets :['@babel/preset-env','@babel/react']
                    }
                }
            }
        ]
    }
}