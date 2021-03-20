module.exports = {
  root: true,
  extends: '@react-native-community',
  parseOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
