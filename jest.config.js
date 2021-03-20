module.exports = {
  preset: 'react-native',
  // verbose: true,
  // transform: {},

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  // testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.([j|t]sx?)$': '<rootDir>/node_modules/babel-jest',
  },
  // collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
};
