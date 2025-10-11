<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion, useMotionValue, useSpring, useTransform } from 'svelte-motion';
	import type { Snippet } from 'svelte';

	type DockIconProps = {
		magnification?: number;
		distance?: number;
		mouseX?: number;
		class?: string;
		children: Snippet;
	};

	let {
		magnification = 60,
		distance = 160,
		mouseX = 0,
		class: className,
		children
	}: DockIconProps = $props();

	let iconElement: HTMLDivElement | undefined = $state();
	const mint = useMotionValue(mouseX);

	$effect(() => {
		mint.set(mouseX);
	});

	const distanceCalc = useTransform(mint, (val: number) => {
		const bounds = iconElement?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	const widthSync = useTransform(
		distanceCalc,
		[-distance, 0, distance],
		[38, magnification, 38]
	);

	const width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12
	});

	const iconClass = $derived(
		cn('flex aspect-square cursor-pointer items-center justify-center rounded-full', className)
	);
</script>

<Motion style={{ width }} let:motion>
	<div use:motion bind:this={iconElement} class={iconClass}>
		{@render children()}
	</div>
</Motion>