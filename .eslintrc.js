module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        mocha: true,  // Add Mocha environment
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    plugins: [
        'import',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // Your custom rules
    },
    globals: {
        expect: 'readonly',  // Add Chai's expect
        request: 'readonly', // Add Supertest's request
        done: 'readonly',    // Add done callback for asynchronous tests
        DEFAULT_ROOT_FOLDER: 'readonly', // Define any other globals used in tests
    },
};
