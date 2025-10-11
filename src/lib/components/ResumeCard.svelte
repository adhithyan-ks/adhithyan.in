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


<div class="">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg/8 font-semibold text-white">Trusted by the world’s most innovative teams</h2>
    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
    </div>
  </div>
</div>
