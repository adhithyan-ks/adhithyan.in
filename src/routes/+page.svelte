<script lang="ts">
  import SkillsCard from '$lib/components/SkillsCard.svelte';
	import TimeLine from '$lib/components/TimeLine.svelte';
  import ProjectsCard from '$lib/components/ProjectsCard.svelte';
  const projects = [
    {
      title: 'Hotel Room Booking',
      techs: ['PHP', 'MySQL'],
      date: 'February 2025 - March 2025',
      description: 'A hotel room booking application with room booking, room management, and user authentication features.',
      image: 'https://github.com/adhithyan-ks/hotel-booking/blob/main/Screenshot%202025-04-27%20215903.png?raw=true',
      url: 'https://github.com/adhithyan-ks/hotel-booking'
    },
    {
      title: 'E-commerce Website',
      techs: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      date: 'May 2025',
      description: 'An e-commerce website with product listing, shopping cart, and user authentication features.',
      image: 'https://github.com/adhithyan-ks/ecom-website/blob/main/Screenshot%202025-06-09%20011749%20copy.png?raw=true',
      url: 'https://github.com/adhithyan-ks/ecom-website'
    }
  ];
</script>
<div class="container mx-auto px-4 py-8 w-2xl mt-25">
 <!-- <h1 class="scroll-m-20 text-balance text-5xl font-extrabold tracking-tight mt-20">
  Hi,
 </h1> -->
 <h1 class="scroll-m-20 text-balance text-7xl font-extrabold tracking-tight mb-4">
   <span class="instrument-serif-regular">I'm Adhithyan</span>
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
 <h3 class="mt-8 scroll-m-20 text-4xl font-semibold tracking-tight pb-6 text-center instrument-serif-regular-italic">
  Projects
 </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-30"> 
    <!-- marging 30 -->
    {#each projects as project}
      <ProjectsCard {...project} />
    {/each}
  </div>
</div>


<style>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Instrument+Serif:ital@0;1&family=Oldenburg&family=Outfit:wght@100..900&display=swap');
.instrument-serif-regular {
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-style: normal;
}

.instrument-serif-regular-italic {
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-style: italic;
}
* {
  font-family: "Outfit", sans-serif;
}

</style>