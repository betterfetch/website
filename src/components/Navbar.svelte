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

<nav
  class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
  aria-label="Main navigation"
>
  <div
    class="flex items-center justify-between px-6 h-14 rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/30 shadow-2xl shadow-cyan-500/[0.04] transition-all duration-300"
  >
    <a
      href="/"
      onclick={(e) => {
        e.preventDefault();
        navigate('/');
        mobileOpen = false;
      }}
      class="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
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
          class="text-sm transition-all duration-200 {currentRoute === link.path
            ? 'text-cyan-400 font-medium'
            : 'text-white/70 hover:text-white'}"
        >
          {link.label}
        </a>
      {/each}
    </div>

    <button
      class="md:hidden text-white/70 hover:text-white transition-colors"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
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
    <div
      class="mt-2 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/30 shadow-xl overflow-hidden md:hidden transition-all duration-300"
    >
      {#each links as link}
        <a
          href="#{link.path}"
          onclick={(e) => {
            e.preventDefault();
            navigate(link.path);
            mobileOpen = false;
          }}
          class="block px-6 py-3 text-sm transition-all duration-200 {currentRoute === link.path
            ? 'text-cyan-400 bg-white/10'
            : 'text-white/70 hover:text-white hover:bg-white/5'}"
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>
