<script lang="ts">
  import { House, PencilLine, TvMinimalPlay, Github, Linkedin } from "lucide-svelte";
  import GithubSvg from "$lib/svg/web/github.svg";
  import LinkedInSvg from "$lib/svg/web/linkedin.svg";
  import Dock from "./Dock.svelte";
  import DockIcon from "./DockIcon.svelte";
  // import * as Tooltip from "$lib/components/ui/tooltip";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import Toggle from "$lib/components/Toggle.svelte";
  let navs = {
    navbar: [
      { label: "Home", icon: House, href: "#" },
      { label: "Blog", icon: PencilLine, href: "#" },
      { label: "Developer", icon: TvMinimalPlay, href: "#" }
      //   { label: "X", icon: TwitterSvg, href: "#" },
      //   { label: "Email", icon: MailSvg, href: "#" },
    ],
    contact: [
      { label: "Github", icon: Github, href: "#" },
      { label: "LinkedIn", icon: Linkedin, href: "#" }
    ],
  };
</script>
<Dock 
  direction="middle"
  let:mouseX 
  let:distance 
  let:magnification
>
  {#each navs.navbar as item}
    <DockIcon {mouseX} {magnification} {distance}>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger
            class="hover:bg-secondary transition-all duration-200 rounded-full p-3 mx-0"
          >
            <svelte:component this={item.icon} size={22} strokeWidth={1.2} />
          </Tooltip.Trigger>
          <Tooltip.Content sideOffset={8}>
            <p>{item.label}</p>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </DockIcon>
  {/each}
  <Separator orientation="vertical" class="h-full w-[0.6px]" />
    {#each navs.contact as item}
      <DockIcon {mouseX} {magnification} {distance}>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger
              class="hover:bg-secondary transition-all duration-200 rounded-full"
            >
            <svelte:component this={item.icon} size={22} strokeWidth={1.2} />
            </Tooltip.Trigger>
            <Tooltip.Content sideOffset={9}>
              <p>{item.label}</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </DockIcon>
    {/each}
  <Separator orientation="vertical" class="h-full w-[0.6px]" />
    <DockIcon {mouseX} {magnification} {distance}>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger
            class="hover:secondary transition-all duration-200 rounded-full p-3 mx-0"
          >
            <Toggle />
          </Tooltip.Trigger>
          <Tooltip.Content sideOffset={8}>
            <p>Toggle Theme</p>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </DockIcon>
</Dock>
