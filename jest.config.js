module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin'
  }
}
