module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2023, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint/eslint-plugin"],
    extends: [
        "airbnb-typescript-prettier",
        "plugin:prettier/recommended",
    ],
    root: true, // This can be useful when you have a project nested inside another project, and you don't want ESLint to mix up the configurations of the two projects.
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ["eslintrc.js", "dist/", "scripts/**/*"],
    rules: {
        "class-methods-use-this": [1],
        "import/prefer-default-export": [0],
        "max-classes-per-file": [1],
        "no-console": [0],
        "no-promise-executor-return": [0],
        "@typescript-eslint/no-unused-vars": [0],
        "@typescript-eslint/no-explicit-any": [0],
        "@typescript-eslint/explicit-module-boundary-types": [0],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};
