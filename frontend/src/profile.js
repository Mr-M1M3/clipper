import Profile from './svelte/Profile.svelte';

const profile = new Profile({
	target: document.body,
	props: {
		title: 'JSON Hero'
	}
});

export default profile;