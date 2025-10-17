<script lang="ts">
  import SkillsCard from '$lib/components/SkillsCard.svelte';
	import TimeLine from '$lib/components/TimeLine.svelte';
</script>
<div class="container mx-auto px-4 py-8 w-2xl">
 <h1 class="scroll-m-20 text-balance text-5xl font-extrabold tracking-tight mt-20">
  Hi, I'm Adhithyan 👋
 </h1>
 <p class="text-foreground text-xl leading-7 [&:not(:first-child)]:mt-6">
  Someone who is very interested in tech and web.
 </p>
<h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  About
 </h3>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
  I am a computer engineering student from Kerala, India, passionate about coding and exploring software and web development. I began coding in 2019, mostly in Scratch. Work mostly around web. I have built some websites using Sveltekit.
 </p>
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight pb-6">
  Experience
 </h3>
 <TimeLine />
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  Skills
 </h3>
 
 <SkillsCard />
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  My Projects
 </h3>
</div>