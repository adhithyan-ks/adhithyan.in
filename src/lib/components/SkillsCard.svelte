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

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	.animate-marquee {
		animation: marquee 30s linear infinite;
	}
	.animate-marquee-reverse {
		animation: marquee 30s linear infinite reverse;
	}
</style>

<div class="relative flex flex-col gap-y-4 overflow-hidden py-10">
	<div class="flex items-center gap-x-4">
		<div class="flex animate-marquee items-center gap-x-8">
			{#each skills1 as skill}
				<div class="flex-shrink-0 flex items-center gap-x-2">
					<Logos name={skill.label.toLowerCase()} />
					<p>{skill.label}</p>
				</div>
			{/each}
		</div>
		<div class="flex animate-marquee items-center gap-x-8" aria-hidden="true">
			{#each skills1 as skill}
				<div class="flex-shrink-0 flex items-center gap-x-2">
					<Logos name={skill.label.toLowerCase()} />
					<p>{skill.label}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex items-center gap-x-4">
		<div class="flex animate-marquee-reverse items-center gap-x-8">
			{#each skills2 as skill}
				<div class="flex-shrink-0 flex items-center gap-x-2">
					<Logos name={skill.label.toLowerCase()} />
					<p>{skill.label}</p>
				</div>
			{/each}
		</div>
		<div class="flex animate-marquee-reverse items-center gap-x-8" aria-hidden="true">
			{#each skills2 as skill}
				<div class="flex-shrink-0 flex items-center gap-x-2">
					<Logos name={skill.label.toLowerCase()} />
					<p>{skill.label}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
