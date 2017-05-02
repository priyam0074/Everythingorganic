module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',       
          query: {
             presets: ['es2015', 'react']
          }
       },
       {
         test: /\.json$/,
         exclude: /(node_modules)/,
         loader: "json-loader"
       },
       {
         test: /\.css$/,
         loader: 'style-loader!css-loader!autoprefixer-loader'
       },
       {
         test: /\.scss$/,
         loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
       }
    ]
  }
}