// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')} `

const buildPrettierCommand = `prettier --write`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
}
