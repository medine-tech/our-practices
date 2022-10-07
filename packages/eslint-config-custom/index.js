module.exports = {
  plugins: ["tailwindcss", "import", "simple-import-sort"],
  extends: [
    "plugin:tailwindcss/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "next",
    "turbo",
    "prettier",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/display-name": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
