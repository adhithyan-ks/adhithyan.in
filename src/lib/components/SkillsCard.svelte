<script>
    import { Badge } from '$lib/components/ui/badge/index.js';
    // import { c, javascript, java, php, python, svelte} from '$lib/svg/index.js';
    import C from '$lib/svg/c.svg';
    import Java from '$lib/svg/java.svg';
    import JavaScript from '$lib/svg/javascript.svg';
    import PHP from '$lib/svg/php.svg';
    import Python from '$lib/svg/python.svg';
    import SvelteLogo from '$lib/components/SvelteLogo.svelte';

    const skills = [
      { label: 'JavaScript', icon: JavaScript },
      { label: 'Java', icon: Java },
      { label: 'Python', icon: Python },
      { label: 'C', icon: C },
      { label: 'PHP', icon: PHP },
      { label: 'Svelte', icon: SvelteLogo },
    ];
  </script>
<div>
  <!-- svelte-ignore a11y_distracting_elements -->
  <marquee behavior="scroll" direction="left" >
    {#each skills as skill}
         <Badge class="mr-2 h-10 rounded-3xl" variant="outline">
            <SvelteLogo size="h-10 w-10" />
            {skill.label}
          </Badge>
    {/each}

  </marquee>
 </div>
