const path=require('path');
const rules = [
    {
        test: /\.tsx?$/,
        exclude:/node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
];

module.exports={
    target:'web',
    mode:'development',
    entry:{
        "main": [
            "./src/index.jsx"
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{ rules },
    resolve:{
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx",".js"]
    },

    devServer:{
        contentBase:'./',
        port:5000
    }        
    
};