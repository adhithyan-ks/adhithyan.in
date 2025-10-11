<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import DockBar from '$lib/components/ui/dock/DockBar.svelte';
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

{@render children?.()}
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<ModeWatcher />
<DockBar />
