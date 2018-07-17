module.exports = {
  extends: [
    '@medipass/react-medipass',
    'plugin:flowtype/recommended'
  ],
  'plugins': [
    'flowtype'
  ],
  rules: {
    'jsx-a11y/href-no-hash': 0
  }
}
