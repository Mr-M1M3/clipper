import Dashboard from './svelte/Dashboard.svelte';

const dashboard = new Dashboard({
	target: document.body,
	props: {
		title: 'JSON Hero'
	}
});

export default dashboard;