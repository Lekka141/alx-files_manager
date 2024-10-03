import babelParser from '@babel/eslint-parser';
import importPlugin from 'eslint-plugin-import';

export default [
    {
        ignores: ['node_modules/**'],
    },
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                process: 'readonly',
                module: 'readonly',
                require: 'readonly',
            },
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false, // Allows ESLint to parse without a Babel config file
                babelOptions: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        plugins: {
            import: importPlugin,
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'import/no-named-as-default': 'error',
            // Add or customize more rules here
        },
    },
];
