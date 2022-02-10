import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'JSON Hero',
		header: 'Share JSON Anytime, Anywhere'
	}
});

export default app;