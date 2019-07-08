function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers'),
      }
    },
  ];
}

module.exports = [
  {
    entry: './style.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-login.js',
    },
    module: {
      rules: [{
        test: /style.scss$/,
        use: getStyleUse('bundle-style.css')
      }]
    },
  },
  {
    entry: "./style.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      loaders: [{
        test: /style.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
