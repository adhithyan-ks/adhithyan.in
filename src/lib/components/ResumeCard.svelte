<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { ChevronRight } from '@lucide/svelte';

  import * as Avatar from '$lib/components/ui/avatar/index.js';
  import { Badge } from '$lib/components/ui/badge';
  import * as Card from '$lib/components/ui/card';
  let {
    logoUrl,
    altText,
    title,
    subtitle,
    href = '#', // Set default values directly in the destructuring assignment. [cite: 71]
    badges,
    period,
    description,
  }: {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
  } = $props();

  // --- STATE ---
  // Use the $state rune for reactive state. [cite: 4, 5, 15]
  // This is the Svelte 5 equivalent of React's useState hook.
  let isExpanded = $state(false);

  // --- EVENT HANDLER ---
  // Logic is cleaner when defined in a separate function, but can also be inline.
  function handleClick(event: MouseEvent) {
    if (description) {
      event.preventDefault();
      isExpanded = !isExpanded;
    }
  }
</script>

<a {href} class="block cursor-pointer group bg-foreground" onclick={handleClick}>
  <Card.Root class="flex">
    <div class="flex-none">
      <Avatar.Root class="border size-12 m-auto bg-muted-background">
        <Avatar.Image src=logoUrl alt=altText class="object-contain" />
        <Avatar.Fallback>{altText[0]}</Avatar.Fallback>
      </Avatar.Root>
    </div>

    <div class="flex-grow ml-4 items-center flex-col">
      <Card.Header>
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
            {title}
            {#if badges}
              <span class="inline-flex gap-x-1 ml-2">
                {#each badges as badge}
                  <Badge variant="secondary" class="align-middle text-xs">
                    {badge}
                  </Badge>
                {/each}
              </span>
            {/if}
            <ChevronRight
              class="size-4 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 {isExpanded
                ? 'rotate-90'
                : 'rotate-0 opacity-0'}"
            />
          </h3>
          <div class="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
            {period}
          </div>
        </div>
        {#if subtitle}
          <div class="font-sans text-xs">{subtitle}</div>
        {/if}
      </Card.Header>

      {#if isExpanded && description}
        <div
          class="mt-2 text-xs sm:text-sm overflow-hidden"
          transition:slide={{ duration: 700, easing: cubicOut }}
        >
          <div class="pt-1 pb-4 pr-4">{description}</div>
        </div>
      {/if}
    </div>
  </Card.Root>
</a>