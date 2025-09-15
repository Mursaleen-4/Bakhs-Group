/**
 * Jest Configuration for Vessel Tracking Frontend Tests
 */

module.exports = {
  // Test environment
  testEnvironment: 'jsdom',

  // Setup files
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],

  // Module name mapping for CSS and asset files
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/tests/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // Test file patterns
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{ts,tsx}'
  ],

  // File extensions to consider
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Transform configuration
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json'
    }]
  },

  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/reportWebVitals.ts',
    '!src/tests/**/*',
    '!src/**/*.stories.{ts,tsx}'
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  coverageReporters: [
    'text',
    'lcov',
    'clover',
    'html'
  ],

  // Ignore patterns
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/'
  ],

  // Module directories
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src'
  ],

  // Timeout for tests
  testTimeout: 10000,

  // Clear mocks between tests
  clearMocks: true,

  // Restore mocks after each test
  restoreMocks: true,

  // Global test variables
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },

  // Handle ES modules
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  // Verbose output
  verbose: true,

  // Error handling
  errorOnDeprecated: true,

  // Max workers (for CI environments)
  maxWorkers: process.env.CI ? 2 : '50%'
};
