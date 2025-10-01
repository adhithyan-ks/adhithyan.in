<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar/index.js';
  let {
    src,
    alt,
    title,
    subtitle,
    href = '#', // Set default values directly in the destructuring assignment. [cite: 71]
    badges,
    period,
    description,
  }: {
    src: string;
    alt: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
  } = $props();


  // --- EVENT HANDLER ---
  // Logic is cleaner when defined in a separate function, but can also be inline.
  function handleClick(event: MouseEvent) {
    if (description) {
      event.preventDefault();
    }
  }
</script>
<div class="flex w-full items-center gap-4 py-3 px-2 rounded-lg transition-colors">
  <Avatar.Root class="size-10">
    <Avatar.Image {src} {alt} class="object-contain" />
    <Avatar.Fallback>{alt[0]}</Avatar.Fallback>
  </Avatar.Root>
  <div class="flex-grow">
    <p class="font-semibold leading-snug">{title}</p>
    {#if subtitle}
      <p class="text-sm text-muted-foreground">{subtitle}</p>
    {/if}
  </div>

  <div class="text-sm text-muted-foreground">
    {period}
  </div>
</div>