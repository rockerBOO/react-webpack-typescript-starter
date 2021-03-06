module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:compat/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'react-hooks'],
	rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
	},
	settings: {
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			version: 'detect'
		}
	}
}
