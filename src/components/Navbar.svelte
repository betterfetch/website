<script lang="ts">
  let {currentRoute, navigate}: {
    currentRoute: string;
    navigate: (path: string) => void;
  } = $props();

  const links = [
    {path: '/', label: 'Home'},
    {path: '/docs', label: 'Docs'},
    {path: '/about', label: 'About'},
    {path: '/download', label: 'Download'},
  ];

  let mobileOpen = $state(false);
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
  <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
    <a
      href="/"
      onclick={(e) => {
        e.preventDefault();
        navigate('/');
        mobileOpen = false;
      }}
      class="text-lg font-bold tracking-tight hover:text-cyan-400 transition-colors"
    >
      betterfetch
    </a>

    <div class="hidden md:flex items-center gap-8">
      {#each links as link}
        <a
          href="#{link.path}"
          onclick={(e) => {
            e.preventDefault();
            navigate(link.path);
          }}
          class="text-sm transition-colors duration-150 {currentRoute === link.path ? 'text-cyan-400' : 'text-zinc-400 hover:text-zinc-100'}"
        >
          {link.label}
        </a>
      {/each}
    </div>

    <button
      class="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
    >
      {#if mobileOpen}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      {/if}
    </button>
  </div>

  {#if mobileOpen}
    <div class="md:hidden border-t border-zinc-800 bg-zinc-950">
      {#each links as link}
        <a
          href="#{link.path}"
          onclick={(e) => {
            e.preventDefault();
            navigate(link.path);
            mobileOpen = false;
          }}
          class="block px-4 py-3 text-sm transition-colors duration-150 {currentRoute === link.path ? 'text-cyan-400 bg-zinc-900' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'}"
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>
