const path = require('path')

const custom = require('../webpack.prod.js')

module.exports = {
  webpackFinal: config => {
    return {
      ...config,
      module: {...config.module, rules: custom().module.rules},
    }
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
}
