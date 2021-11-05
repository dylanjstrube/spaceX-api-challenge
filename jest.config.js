module.exports = {
  modulePathIgnorePatterns: ['.dist/'],
  coverageThreshold: {
    global: {
      branches: 25,
      functions: 30,
      lines: 50,
      statements: 50,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/test'],
}
