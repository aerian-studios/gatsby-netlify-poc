module.exports = {
    extends: ["airbnb-base", "prettier"],
    env: {
        browser: true,
        es6: true,
        "jest/globals": true,
    },
    plugins: ["react", "jest"],
    globals: {
        graphql: false,
    },
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
    rules: {
        "import/extensions": false,
    },
};
