<script>
    import { Badge } from '$lib/components/ui/badge/index.js';
    // import { c, javascript, java, php, python, svelte} from '$lib/svg/index.js';
    import C from '$lib/svg/c.svg';
    import Java from '$lib/svg/java.svg';
    import JavaScript from '$lib/svg/javascript.svg';
    import PHP from '$lib/svg/php.svg';
    import Python from '$lib/svg/python.svg';
    import SvelteLogo from '$lib/components/SvelteLogo.svelte';
    import Logos from '$lib/components/svg/logos.svelte';

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
  <!-- <marquee behavior="scroll" direction="left" >
    {#each skills as skill}
         <Badge class="mr-2 h-10 rounded-3xl" variant="outline">
            <SvelteLogo size="h-10 w-10" />
            {skill.label}
          </Badge>
    {/each}

  </marquee> -->
 </div>


 <!-- <div class="">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg/8 font-semibold text-white">Trusted by the world’s most innovative teams</h2>
    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
    </div>
  </div>
</div> -->
<div class="">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      {#each skills as skill}
          <Logos name={skill.label.toLowerCase()} />
          {skill.label}
        {/each}
      </div>
    </div>
  </div>
  
  
  <!-- <SvelteLogo /> -->
