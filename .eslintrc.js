module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "extends": [
    "mysticatea",
    "mysticatea/modules",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "node"
  ],
  "env": {
    "browser": false
  },
  "globals": {
    "applicationCache": false,
    "atob": false,
    "btoa": false,
    "console": false,
    "document": false,
    "location": false,
    "window": false
  },
  "rules": {
    "node/no-extraneous-import": "error",
    "node/no-missing-import": "error",
    "node/no-unpublished-import": "error",
    "vue/html-indent": [
      "error",
      4
    ],
    "vue/max-attributes-per-line": "off"
  }
}