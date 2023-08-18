module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "airbnb-typescript/base"],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint", "import"],
    "root": true,
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "ignorePatterns": ["node_modules/", "build/", "original/", ".eslintrc.js"],
    "rules": {
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/lines-between-class-members": ["off"],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "enums": "always-multiline",
            "functions": "never"
        }],
    }
}
