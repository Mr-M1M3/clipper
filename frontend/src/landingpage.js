import LandingPage from './svelte/LandingPage.svelte';

const landing_page = new LandingPage({
	target: document.body,
	props: {
		title: 'JSON Hero'
	}
});

export default landing_page;