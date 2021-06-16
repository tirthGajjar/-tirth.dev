module.exports = {
  "*.{js,ts,tsx}": "yarn run eslint",
  "*.{js,ts,tsx,css,md}": "yarn run prettier",
  "*.{ts,tsx}": () => `yarn run typecheck`,
};
