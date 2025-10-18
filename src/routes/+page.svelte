<script lang="ts">
  import { FileDown, MapPin } from '@lucide/svelte';
  import SkillsCard from '$lib/components/SkillsCard.svelte';
	import TimeLine from '$lib/components/TimeLine.svelte';
  import ProjectsCard from '$lib/components/ProjectsCard.svelte';
	import { Button } from '$lib/components/ui/button';
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
<div class="container mx-auto px-4 py-8 md:w-2xl mt-10">
 <!-- <h1 class="scroll-m-20 text-balance text-5xl font-extrabold tracking-tight mt-20">
  Hi,
 </h1> -->
 <h1 class="scroll-m-20 text-balance text-5xl md:text-7xl font-medium tracking-tight mb-4">
   <span class="instrument-serif-regular">I'm Adhithyan</span>
 </h1>
 <p class="text-foreground text-xl leading-7 [&:not(:first-child)]:mt-6 flex items-center gap-2">
        <MapPin /> Kerala, India
 </p>
<h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  About
 </h3>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
  I am a computer engineering student from Kerala, India, passionate about coding and exploring software and web development. I began coding in 2019, mostly in Scratch. Work mostly around web. I have built some websites using Sveltekit.
 </p>
 <Button class="mt-3 h-10 px-4 rounded-md text-foreground " variant="outline">
  <a href="/resume.pdf" download="Adhithyan K S - Resume.pdf">
    <div class="flex items-center gap-2">
      <FileDown />
      Resume
    </div>
  </a>
</Button>
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight pb-6">
  Experience
 </h3>
 <TimeLine />
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  Skills
 </h3>
 
 <SkillsCard />
 <h3 class="mt-8 scroll-m-20 text-5xl font-semibold tracking-tight pb-6 text-center instrument-serif-regular-italic">
  Projects
 </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-30"> 
    <!-- marging 30 -->
    {#each projects as project}
      <ProjectsCard {...project} />
    {/each}
  </div>
</div>
