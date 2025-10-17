<script lang="ts">
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    
    import { toggleMode } from "mode-watcher";
</script>
<button
    type="button"
    class="grid items-center justify-center hover:bg-secondary cursor-pointer transition-all duration-200 rounded-full p-3 mx-0"
    on:click={toggleMode}
>
    <SunIcon class="col-start-1 row-start-1 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" />
    <MoonIcon class="col-start-1 row-start-1 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
</button>