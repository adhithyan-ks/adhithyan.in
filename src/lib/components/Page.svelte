<script lang="ts">
  import ResumeCard from '$lib/components/ResumeCard.svelte';
  
  const education = [
    {
      src: 'https://www.joonsquare.com/usermanage/image/business/government-polytechnic-thrissur-14850/government-polytechnic-thrissur-logo.png',
      alt: 'GPTC-KKM',
      title: 'Government Polytechnic College, Kunnamkulam',
      subtitle: 'Computer Engineering',
      href: 'http://www.gptckunnamkulam.ac.in/',
      badges: [],
      period: '2023 - 2026 (Expected)',
      description: 'Diploma in Computer Engineering'
    },
  ];
  const skills = {
    languages: ['JavaScript', 'Java', 'Python', 'C', 'HTML', 'CSS', 'SQL', 'PHP'],
    frameworks: ['SvelteKit', 'Express.js', 'tailwindcss'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git', 'VS Code'],
  };
</script>
<div>
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
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  Education
 </h3>
 {#each education as edu}
  <ResumeCard
    src={edu.src}
      alt={edu.alt}
      title={edu.title}
      subtitle={edu.subtitle}
      href={edu.href}
      badges={edu.badges}
      period={edu.period}
      description={edu.description}
    />
{/each}
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  Skills
 </h3>
 <div class="">
  {#each Object.entries(skills) as [category, items]}
   <div>
    <h4 class="text-md font-semibold capitalize">{category}</h4>
    <ul class="mt-2 flex flex-wrap gap-2">
     {#each items as item}
      <li>
       <span class="inline-flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
        {item}
       </span>
      </li>
     {/each}
    </ul>
   </div>
  {/each}
 </div>

 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  My Projects
 </h3>
</div>