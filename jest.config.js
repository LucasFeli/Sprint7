/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
    },
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest'
    }
  };
  
  module.exports = config;
  