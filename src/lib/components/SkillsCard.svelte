<script lang="ts">
  import Logos from "$lib/components/svg/logos.svelte";
    const skills = [
      { label: 'JavaScript'},
      { label: 'Java'},
      { label: 'Python'},
      { label: 'C'},
      { label: 'PHP'},
      { label: 'Svelte'},
    ];
  </script>
<div class="">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      {#each skills as skill}
      <div>
        <Logos name={skill.label.toLowerCase()} />
        <!-- <p>{skill.label}</p> -->
      </div>
      {/each}
      </div>
    </div>
  </div>
  
  
  <!-- <SvelteLogo /> -->
