module.exports = {
  extends: [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-console": [
      "error",
      {
        allow: ["log", "warn", "error"],
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["off"],
    "jsx-a11y/href-no-hash": ["off"],
    "jsx-a11y/label-has-associated-control": ["off"],
    "import/no-unresolved": ["off"],
    "import/exports-last": ["error"],
    "prettier/prettier": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
}
