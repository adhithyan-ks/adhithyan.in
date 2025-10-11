<script lang="ts">
	import { House, Github, Linkedin, Mail } from '@lucide/svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Dock from '$lib/components/ui/dock/Dock.svelte';
	import DockIcon from '$lib/components/ui/dock/DockIcon.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	let navs = {
		navbar: [
			{ label: 'Home', icon: House, href: '/' }
			// { label: "Blog", icon: PencilLine, href: "#" },
		],
		contact: [
			{ label: 'Github', icon: Github, href: 'https://github.com/adhithyan-ks' },
			{ label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/adhithyanks' },
			{ label: 'Email', icon: Mail, href: 'mailto:adhithyanktd@gmail.com' }
		]
	};
</script>

<div class="">
	<Dock
		direction="middle"
		class="fixed bottom-5 left-1/2 -translate-x-1/2 z-500 bg-background/80 rounded-4xl"
	>
		{#snippet children({ mouseX, distance, magnification })}
			{#each navs.navbar as item (item.href)}
				<DockIcon {mouseX} {magnification} {distance}>
					{#snippet children()}
						<Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger
									class="hover:bg-secondary cursor-pointer transition-all duration-200 rounded-full p-3 mx-0"
								>
									<a href={item.href}>
										<item.icon size={22} strokeWidth={1.2} />
									</a>
								</Tooltip.Trigger>
								<Tooltip.Content sideOffset={8}>
									<p>{item.label}</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider>
					{/snippet}
				</DockIcon>
			{/each}
			<Separator orientation="vertical" class="h-full w-[0.6px]" />
			{#each navs.contact as item (item.href)}
				<DockIcon {mouseX} {magnification} {distance}>
					{#snippet children()}
						<Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger
									class="hover:bg-secondary cursor-pointer transition-all duration-200 rounded-full p-3 mx-0"
								>
									<a href={item.href} target="_blank">
										<item.icon size={22} strokeWidth={1.2} />
									</a>
								</Tooltip.Trigger>
								<Tooltip.Content sideOffset={9}>
									<p>{item.label}</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider>
					{/snippet}
				</DockIcon>
			{/each}
			<Separator orientation="vertical" class="h-full w-[0.6px]" />
			<DockIcon {mouseX} {magnification} {distance}>
				{#snippet children()}
					<Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger>
								<Toggle />
							</Tooltip.Trigger>
							<Tooltip.Content sideOffset={8}>
								<p>Toggle Theme</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				{/snippet}
			</DockIcon>
		{/snippet}
	</Dock>
</div>