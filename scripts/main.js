import App from './App.svelte';

const app = new App({
	target: document.querySelector('.svelte-main'),
	props: {
		name: 'Perrine'
	}
});

export default app;