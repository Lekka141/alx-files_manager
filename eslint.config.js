import babelParser from '@babel/eslint-parser';
import importPlugin from 'eslint-plugin-import';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

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
                requireConfigFile: false,
                ecmaFeatures: {
                    jsx: true,
                },
                babelOptions: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        plugins: {
            import: importPlugin,
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            'no-unused-vars': 'warn',
            'import/no-named-as-default': 'off',
            // Add more rules as needed
        },
    },
];
