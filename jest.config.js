module.exports = {
    coverageDirectory: "coverage",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ['./setupTests.ts'],
};
