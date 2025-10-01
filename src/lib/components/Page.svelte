<script lang="ts">
  import ResumeCard from '$lib/components/ResumeCard.svelte';

  const workExperience = {
    src: 'https://www.joonsquare.com/usermanage/image/business/government-polytechnic-thrissur-14850/government-polytechnic-thrissur-logo.png',
    alt: 'GPTC-KKM',
    title: 'Government Polytechnic College, Kunnamkulam',
    subtitle: 'Computer Engineering',
    href: 'http://www.gptckunnamkulam.ac.in/',
    badges: [],
    period: '2023 - 2026 (Expected)',
    description: 'Diploma in Computer Engineering'
  };
</script>
<div>
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
 <ResumeCard
  src={workExperience.src}
    alt={workExperience.alt}
    title={workExperience.title}
    subtitle={workExperience.subtitle}
    href={workExperience.href}
    badges={workExperience.badges}
    period={workExperience.period}
    description={workExperience.description}
  />

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