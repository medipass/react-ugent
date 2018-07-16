module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Ugent',
      externals: {
        react: 'React'
      }
    }
  }
}
