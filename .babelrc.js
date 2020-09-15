module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          // TODO: ie 10 is necessary for EMR. Maybe we make this a conditional target depending on the application context?
          // ie: '10',
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['react-hot-loader/babel'],
}
