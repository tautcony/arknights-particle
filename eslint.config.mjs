import path from "node:path";
import { fileURLToPath } from "node:url";
import globals from "globals";

import _import from "eslint-plugin-import";
import eslint from "@eslint/js";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    {
        ignores: ["**/node_modules/", "**/build/", "**/original/", "**/.eslintrc.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
    },
    ...tseslint.config(
        eslint.configs.recommended,
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
    ), {
    plugins: {
        import: fixupPluginRules(_import),
        '@stylistic/ts': stylisticTs,
    },
    rules: {
        "@stylistic/ts/indent": ["error", 4],
        "@stylistic/ts/quotes": ["error", "double"],
        "@stylistic/ts/comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "enums": "always-multiline",
            "functions": "never"
        }],
        "@typescript-eslint/lines-between-class-members": ["off"],
        "@typescript-eslint/no-unsafe-assignment": ["off"],
        "@typescript-eslint/no-unsafe-argument": ["off"],
        "@typescript-eslint/no-unsafe-member-access": ["off"],
        "@typescript-eslint/no-unnecessary-condition": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/restrict-template-expressions": ["error", {
            "allowNumber": true,
        }],
        "no-param-reassign": ["off"],
        "max-len": ["off"],
        "no-underscore-dangle": ["off"],
        "no-plusplus": ["off"],
        "class-methods-use-this": ["error"],
    },
}];
