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
  <!-- Primary Meta Tags -->
  <title>Adhithyan K S | Computer Engineering Student & Web Developer</title>
  <meta name="title" content="Adhithyan K S | Computer Engineering Student & Web Developer">
  <meta name="description" content="I'm Adhithyan K S, a Computer Engineering student from Kerala, passionate about web development, IoT, and modern tech. Explore my portfolio and projects.">
  <meta name="keywords" content="Adhithyan K S, portfolio, web developer, computer engineering, Kerala, GPTC Kunnamkulam, SvelteKit, MERN, projects">
  <meta name="author" content="Adhithyan K S">
  <meta name="robots" content="index, follow">

  <!-- Canonical Link -->
  <link rel="canonical" href="https://adhithyan.in" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://adhithyan.in/">
  <meta property="og:title" content="Adhithyan K S | Computer Engineering Student & Web Developer">
  <meta property="og:description" content="Explore my portfolio showcasing my projects, achievements, and skills in computer engineering and web development.">
  <meta property="og:image" content="https://adhithyan.in/og-image.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://adhithyan.in/">
  <meta property="twitter:title" content="Adhithyan K S | Computer Engineering Student & Web Developer">
  <meta property="twitter:description" content="I'm Adhithyan K S, a Computer Engineering student passionate about full-stack web development and innovative projects.">
  <meta property="twitter:image" content="https://adhithyan.in/og-image.png">

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
