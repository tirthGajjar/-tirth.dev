module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "[iI]gnored" },
    ],
    // Disallow imports from src/server/ in src/pages/ except for src/pages/api
    // (see the "overrides" section for the exception)
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "./src/pages",
            from: "./src/server",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      // Allow imports from src/server/ in src/pages/api
      files: ["src/pages/api/**/*"],
      rules: {
        "import/no-restricted-paths": [
          "error",
          {
            zones: [
              {
                target: "./src/pages/api",
                from: "./src/client/",
              },
            ],
          },
        ],
      },
    },
  ],
};
