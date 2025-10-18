<script lang="ts">
	import Logos from '$lib/components/svg/logos.svelte';
	const skills = [
		{ label: 'JavaScript' },
		{ label: 'Java' },
		{ label: 'Python' },
		{ label: 'C' },
		{ label: 'PHP' },
		{ label: 'Svelte' },
		{ label: 'SQL' },
		{ label: 'Express' },
		{ label: 'MongoDB' },
		{ label: 'Git' },
		{ label: 'React' }
	];

	const half = Math.ceil(skills.length / 2);
	const skills1 = skills.slice(0, half);
	const skills2 = skills.slice(half);
</script>

<div class="relative flex flex-col gap-y-4 overflow-hidden py-10">
	<div class="marquee-container flex items-center gap-x-4">
		<div class="marquee flex items-center gap-x-8">
			{#each skills1 as skill}
				<div class="flex-shrink-0 flex items-center gap-x-2">
					<Logos name={skill.label.toLowerCase()} />
					<p>{skill.label}</p>
				</div>
			{/each}
		</div>
		<div class="marquee flex items-center gap-x-8" aria-hidden="true">
			{#each skills1 as skill}
				<div class="flex-shrink-0 flex items-center gap-x-2">
					<Logos name={skill.label.toLowerCase()} />
					<p>{skill.label}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="marquee-container flex items-center gap-x-4">
		<div class="marquee-slow flex items-center gap-x-8">
			{#each skills2 as skill}
				<div class="flex-shrink-0 flex items-center gap-x-2">
					<Logos name={skill.label.toLowerCase()} />
					<p>{skill.label}</p>
				</div>
			{/each}
		</div>
		<div class="marquee-slow flex items-center gap-x-8" aria-hidden="true">
			{#each skills2 as skill}
				<div class="flex-shrink-0 flex items-center gap-x-2">
					<Logos name={skill.label.toLowerCase()} />
					<p>{skill.label}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	.marquee {
		animation: marquee 20s linear infinite;
	}

	.marquee-slow {
		animation: marquee 25s linear infinite;
	}

	.marquee-container:hover .marquee,
	.marquee-container:hover .marquee-slow {
		animation-play-state: paused;
	}
</style>