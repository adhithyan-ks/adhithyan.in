<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import DockBar from '$lib/components/ui/dock/DockBar.svelte';
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>
<ModeWatcher />
<DockBar />

{@render children?.()}
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<footer>
	<p class="text-center m-4">© {new Date().getFullYear()} Adhithyan. All rights reserved.</p>
</footer>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Instrument+Serif:ital@0;1&family=Oldenburg&family=Outfit:wght@100..900&display=swap');
:global(.instrument-serif-regular) {
  font-family: "Instrument Serif", serif;
  /* font-weight: 400; */
  /* font-style: normal; */
}
:global(.instrument-serif-regular-italic) {
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-style: italic;
}
:global(*) {
  font-family: "Outfit", sans-serif;
}

</style>
