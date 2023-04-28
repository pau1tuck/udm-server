module.exports = {
  extends: ["google"],
  plugins: ["node", "promise"],
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "no-unused-vars": "warn",
    "max-len": ["warn", { code: 120 }],
    "node/exports-style": ["error", "module.exports"],
    "node/file-extension-in-import": ["error", "always"],
    "node/prefer-promises/fs": "error",
    "promise/always-return": "error",
    "promise/catch-or-return": "error",
  },
};
