import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginJest from "eslint-plugin-jest"; // Import jest plugin

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: "readonly", // Add Jest as a global
        "jest/globals": true, // Ensure Jest globals are available
      },
    },
  },
  {
    files: ["src/**/*.spec.js"], // Apply specific rules for your test files
    plugins: {
      jest: eslintPluginJest, // Use the plugin object instead of an array
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      "jest/valid-expect": "error", // Example Jest-specific rule
      "jest/no-disabled-tests": "warn", // Example Jest-specific rule
    },

    // plugins: {
    //   jest: jestPlugin,
    // },
    // languageOptions: {
    //   globals: {
    //     ...globals.jest,
    //   },
    // },
    // rules: {
    //   ...jestPlugin.configs.recommended.rules,
    // },
  },
  pluginJs.configs.recommended, // Apply the default JavaScript rules
];
