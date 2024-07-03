module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/context/(.*)$': '<rootDir>/context/$1',
        '^@/models/(.*)$': '<rootDir>/models/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
        '^@/services/(.*)$': '<rootDir>/services/$1'
    },
    testEnvironment: 'jsdom',
};
