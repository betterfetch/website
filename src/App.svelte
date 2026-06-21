<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Download from './pages/Download.svelte';
  import Docs from './pages/Docs.svelte';

  let route = $state(window.location.hash.replace('#', '') || '/');

  function navigate(path: string) {
    window.location.hash = path;
  }

  $effect(() => {
    const handler = () => {
      route = window.location.hash.replace('#', '') || '/';
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  });
</script>

<div class="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col selection:bg-cyan-400 selection:text-zinc-950">
  <Navbar currentRoute={route} {navigate} />
  <main class="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
    {#if route === '/'}
      <Home />
    {:else if route === '/about'}
      <About />
    {:else if route === '/download'}
      <Download />
    {:else if route === '/docs'}
      <Docs />
    {/if}
  </main>
  <Footer />
</div>
