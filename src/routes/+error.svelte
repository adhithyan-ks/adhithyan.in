<script lang="ts">
  import { page } from '$app/state';
  import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
  <title>{page.status}: {page.error?.message || 'Not Found'}</title>
</svelte:head>
<div class="flex flex-col items-center justify-center min-h-screen text-center mx-auto px-4 py-8 md:w-2xl">
  <h1 class="scroll-m-20 text-balance text-5xl md:text-7xl font-medium tracking-tight mb-4">
    {page.status} &nbsp; | &nbsp; {page.error?.message}
  </h1>
  <p class="leading-7 [&:not(:first-child)]:mt-6">
    Sorry, the page you are looking for does not exist.
  </p>
</div>