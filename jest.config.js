module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '^@/app/(.*)$': '<rootDir>/src/app/$1',
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/context/(.*)$': '<rootDir>/context/$1',
        '^@/models/(.*)$': '<rootDir>/models/$1',
        '^@/services/(.*)$': '<rootDir>/services/$1'
    },
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
};
