const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [tailwindcss, autoprefixer]

isProduction &&
  plugins.push(
    purgecss({
      content: ['./src/**/*', 'index.html'],
      defaultExtractor: content =>
        content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    }),
  )

module.exports = {
  plugins,
}
