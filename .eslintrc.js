module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'simple-import-sort',
        'unused-imports',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:node/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            { 'ts-ignore': 'allow-with-description' },
        ],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-default-export': 'error',
        'import/no-duplicates': 'error',
        'import/no-unresolved': 'off',
        'node/no-extraneous-import': [
            'error',
            {
                allowModules: [
                    '@aws-sdk/client-dynamodb',
                    '@aws-sdk/client-sqs',
                    '@aws-sdk/util-dynamodb',
                ],
            },
        ],
        'node/no-missing-import': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
};
