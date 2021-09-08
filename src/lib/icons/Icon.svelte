<script lang="ts">
  import GitHubIcon from './GitHubIcon.svelte';
  import LinkedInIcon from './LinkedInIcon.svelte';
  import TwitterIcon from './TwitterIcon.svelte';

  const icons = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    twitter: TwitterIcon,
  } as const;

  export let icon: keyof typeof icons;
</script>

<svelte:component this={icons[icon]} />
