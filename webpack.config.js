// webpack.config.js
module.exports = {
    // ... other configurations
    module: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      entry: './src/index.ts',
      rules: [
        // ... other rules
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
  };