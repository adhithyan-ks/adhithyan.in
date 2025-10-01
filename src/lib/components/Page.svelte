<script lang="ts">
  // 1. Import the component you created.
  // Adjust the path if you saved it elsewhere, e.g., '$lib/components/ResumeCard.svelte'.
  import ResumeCard from './ResumeCard.svelte';

  // 2. Define the data you want to display.
  // This could come from a `load` function, an API call, or be defined directly.
  const workExperience = {
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    altText: 'Svelte',
    title: 'Senior Frontend Developer',
    subtitle: 'Innovate Corp.',
    href: 'https://svelte.dev',
    badges: [],
    period: '2022 - Present',
    description: 'Leading the development of a next-generation web platform using SvelteKit. Responsible for component architecture, state management, and performance optimization.'
  };
</script>

<main class="p-8 max-w-2xl mx-auto">
  <h1 class="text-3xl font-bold mb-6">My Experience</h1>

  <ResumeCard
    logoUrl={workExperience.logoUrl}
    altText={workExperience.altText}
    title={workExperience.title}
    subtitle={workExperience.subtitle}
    href={workExperience.href}
    badges={workExperience.badges}
    period={workExperience.period}
    description={workExperience.description}
  />

  <!-- <div class="mt-4">
     <ResumeCard
        logoUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        altText="React"
        title="Frontend Developer"
        subtitle="Legacy Systems Inc."
        href="https://react.dev"
        badges={['React', 'Next.js']}
        period="2020 - 2022"
        description="Built and maintained client-facing applications with React and Next.js."
      />
  </div> -->

</main>
<div>
    <!-- <DockExample /> -->
 <h1 class="scroll-m-20 text-balance text-5xl font-extrabold tracking-tight mt-20">
  Hi, I'm Adhithyan 👋
 </h1>
 <p class="text-foreground text-xl leading-7 [&:not(:first-child)]:mt-6">
  Once upon a time, in a far-off land, there was a very lazy king who spent
  all day lounging on his throne. One day, his advisors came to him with a
  problem: the kingdom was running out of money.
 </p>
<h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  About
 </h3>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
  I am a computer engineering student from Kerala, India, passionate about coding and exploring software and web development. I began coding in 2019, mostly in Scratch.I have basic knowledge of C programming, MySQL, JavaScript and PHP. My goals include enhancing my skills, building a strong portfolio, and contributing to open-source projects while collaborating with other developers
 </p>
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  Education
 </h3>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
  The king&apos;s subjects were not amused. They grumbled and complained, but
  the king was firm:
 </p>
 <ul class="my-6 ml-6 list-disc [&>li]:mt-2">

 </ul>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
  As a result, people stopped telling jokes, and the kingdom fell into a
  gloom. But there was one person who refused to let the king&apos;s
  foolishness get him down: a court jester named Jokester.
 </p>
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  Skills
 </h3>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
  Jokester began sneaking into the castle in the middle of the night and
  leaving jokes all over the place: under the king&apos;s pillow, in his soup,
  even in the royal toilet. The king was furious, but he couldn&apos;t seem to
  stop Jokester.
 </p>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
  And then, one day, the people of the kingdom discovered that the jokes left
  by Jokester were so funny that they couldn&apos;t help but laugh. And once
  they started laughing, they couldn&apos;t stop.
 </p>
 <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  My Projects
 </h3>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
  The people of the kingdom, feeling uplifted by the laughter, started to tell
  jokes and puns again, and soon the entire kingdom was in on the joke.
 </p>
</div>