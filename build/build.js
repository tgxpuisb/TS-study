const webpack = require('webpack')
const path = require('path')
const glob = require('glob')

let entries = glob.sync('./src/**/*.ts').reduce((prev, cur) => {
    prev[cur.replace(/\.\/src\/(.+?)\.ts/, '$1')] = cur
    return prev
}, Object.create(null))

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    }
}