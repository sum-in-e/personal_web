module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['airbnb-base', 'prettier', 'plugin:react/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'no-console': 'off',
		'no-unused-vars': 'warn',
	},
};
