module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
        node: true,
        es6: true,
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/no-namespace': 'off',
        'no-console': 'warn',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'no-unused-private-class-members': 'warn',
        'no-unreachable': ['error'],
        'no-sparse-arrays': ['error'],
        'no-setter-return': ['error'],
        'no-self-compare': ['error'],
        'no-self-assign': ['error'],
        'no-inner-declarations': ['error'],
        'camelcase': ['error', { 'properties': 'always' }],
    }
};
