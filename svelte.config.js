import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// setting build for gh-pages or dev for development
const dev = false;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		/**prerender: {
			entries: []
		},*/
		/**paths: {
			base: dev ? '' : '/svelte-ui-frameworks'
		}*/
	},
	preprocess: vitePreprocess()
};

export default config;
