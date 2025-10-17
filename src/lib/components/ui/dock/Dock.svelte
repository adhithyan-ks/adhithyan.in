<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cva, type VariantProps } from 'class-variance-authority';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type DockProps = VariantProps<typeof dockVariants> & {
		class?: string;
		magnification?: number;
		distance?: number;
		direction?: 'top' | 'middle' | 'bottom';
		children: Snippet<[{ mouseX: number; magnification: number; distance: number; }]>;
	};

	let {
		class: className,
		magnification = 60,
		distance = 140,
		direction = 'middle',
		children
	}: DockProps = $props();

	const dockVariants = cva(
		'mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md'
	);

	let mouseX = $state(Infinity);

	const dockClass = $derived(
		cn(dockVariants(), className, {
			'items-start': direction === 'top',
			'items-center': direction === 'middle',
			'items-end': direction === 'bottom'
		})
	);
</script>

<Motion let:motion>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		use:motion
        role="list"
		onmousemove={(e) => (mouseX = e.pageX)}
		onmouseleave={() => (mouseX = Infinity)}
		class={dockClass}
	>
		{@render children({ mouseX, magnification, distance })}
	</div>
</Motion>