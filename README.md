# React Webpack Typescript Starter

React 7 starter with Typescript 4, StyledComponents 5, Normalize.css 8
Webpack 5 with React Fast Refresh, ESLint 5, Stylelint 10, Jest 24

This is what I currently like to use as a starter mix. Has Workbox added but not implemented. Can be implemented like this in your application.

```
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/workbox.js')
	})
}
```
