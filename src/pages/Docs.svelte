<script lang="ts">
  const modules = [
    { name: "user", description: "Current username" },
    { name: "host", description: "System hostname" },
    { name: "os", description: "OS type and version" },
    { name: "kernel", description: "Kernel version" },
    { name: "uptime", description: "System uptime" },
    { name: "cpu", description: "CPU model and core count" },
    { name: "memory", description: "Used and total RAM" },
    { name: "battery", description: "Battery percentage and status" },
    { name: "disk", description: "Disk usage on root mount" },
    { name: "packages", description: "Installed package count" },
  ];

  const colors = [
    "black", "red", "green", "yellow",
    "blue", "magenta", "cyan", "white",
  ];

  const osLogos = [
    {
      name: "Arch Linux",
      art: `       /\\
      /  \\
     /\\   \\
    /      \\
   /   ,,   \\
  /   |  |  -\\
 /_-''    ''-_\\`,
    },
    {
      name: "Ubuntu",
      art: `         _
     ---(_)
 _/  ---  \\
(_) |   |
  \\  --- _/
     ---(_)`,
    },
    {
      name: "Debian",
      art: `  _____
 /  __ \\
|  /    |
|  \\___-
 -_
   --_`,
    },
    {
      name: "Void Linux",
      art: `    _______
 _ \\______ -
| \\  ___  \\ |
| | /   \\ | |
| | \\___/ | |
| \\______ \\_|
 -_______\\`,
    },
  ];

  const pkgManagers = [
    "dpkg (Debian/Ubuntu)",
    "rpm (Fedora/RHEL)",
    "pacman (Arch)",
    "flatpak",
  ];
</script>

<div class="max-w-3xl mx-auto">
  <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 text-center">
    Documentation
  </h1>

  <p class="mt-4 text-lg text-zinc-400 text-center">
    Everything you need to know about using and configuring betterfetch.
  </p>

  <!-- Usage -->
  <section class="mt-12">
    <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Usage</h2>
    <p class="text-zinc-300 mb-4">
      Run betterfetch from your terminal to display system information with
      ASCII art.
    </p>

    <div class="rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden">
      <div class="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
        <span class="ml-2 text-xs text-zinc-600">terminal</span>
      </div>
      <pre class="p-4 md:p-5 text-sm leading-relaxed font-mono text-zinc-300 overflow-x-auto"><code><span class="text-green-400">$</span> betterfetch</code></pre>
    </div>

    <h3 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">Options</h3>
    <div class="rounded-lg border border-zinc-800 divide-y divide-zinc-800">
      <div class="flex items-start gap-4 p-4">
        <code class="shrink-0 text-sm font-mono text-cyan-400">-n, --no-ascii</code>
        <span class="text-sm text-zinc-400">Suppress ASCII art output. Shows system info only.</span>
      </div>
      <div class="flex items-start gap-4 p-4">
        <code class="shrink-0 text-sm font-mono text-cyan-400">--help</code>
        <span class="text-sm text-zinc-400">Display help message with usage information.</span>
      </div>
      <div class="flex items-start gap-4 p-4">
        <code class="shrink-0 text-sm font-mono text-cyan-400">--version</code>
        <span class="text-sm text-zinc-400">Print version information.</span>
      </div>
    </div>
  </section>

  <!-- Modules -->
  <section class="mt-12">
    <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Modules</h2>
    <p class="text-zinc-300 mb-4">
      betterfetch displays system information in modules. The default order is:
    </p>

    <div class="rounded-lg border border-zinc-800 divide-y divide-zinc-800">
      {#each modules as { name, description }}
        <div class="flex items-start gap-4 p-3.5">
          <code class="shrink-0 text-sm font-mono text-cyan-400 w-20">{name}</code>
          <span class="text-sm text-zinc-400">{description}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- Configuration -->
  <section class="mt-12">
    <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Configuration</h2>
    <p class="text-zinc-300 mb-4">
      betterfetch reads a TOML config file from
      <code class="text-sm font-mono text-zinc-100 bg-zinc-800 px-1.5 py-0.5 rounded">~/.config/betterfetch/config.toml</code>.
      If the file doesn't exist, defaults are used.
    </p>

    <div class="rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden">
      <div class="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
        <span class="ml-2 text-xs text-zinc-600">config.toml</span>
      </div>
      <pre class="p-4 md:p-5 text-sm leading-relaxed font-mono text-zinc-300 overflow-x-auto"><code><span class="text-zinc-500"># Custom ASCII art</span>
ascii_art = <span class="text-green-400">'''</span>
 <span class="text-green-400">_          _   _</span>
<span class="text-green-400">| |__   ___| |_| |</span>
<span class="text-green-400">| '_ \ / _ \ __| __|</span>
<span class="text-green-400">'''</span>

<span class="text-zinc-500"># Modules to display, in order</span>
modules = [<span class="text-yellow-400">"user"</span>, <span class="text-yellow-400">"host"</span>, <span class="text-yellow-400">"os"</span>, <span class="text-yellow-400">"kernel"</span>, <span class="text-yellow-400">"cpu"</span>, <span class="text-yellow-400">"memory"</span>]

<span class="text-zinc-500"># Color settings</span>
[colors]
title = <span class="text-yellow-400">"yellow"</span></code></pre>
    </div>

    <h3 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">Colors</h3>
    <p class="text-zinc-300 mb-3">The <code class="text-sm font-mono text-zinc-100 bg-zinc-800 px-1.5 py-0.5 rounded">title</code> field supports basic color names:</p>
    <div class="flex flex-wrap gap-2">
      {#each colors as color}
        <span class="text-sm font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded">{color}</span>
      {/each}
    </div>
  </section>

  <!-- ASCII Art -->
  <section class="mt-12">
    <h2 class="text-2xl font-semibold text-zinc-100 mb-4">ASCII Art</h2>
    <p class="text-zinc-300 mb-4">
      betterfetch displays OS-specific ASCII art alongside system info.
      Built-in logos are available for:
    </p>

    <div class="grid gap-3 sm:grid-cols-2 mb-6">
      {#each osLogos as os}
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <code class="text-sm font-mono text-cyan-400">{os.name}</code>
          <pre class="mt-2 text-xs leading-relaxed font-mono text-zinc-400">{os.art}</pre>
        </div>
      {/each}
    </div>

    <p class="text-zinc-300">
      You can override the ASCII art via the
      <code class="text-sm font-mono text-zinc-100 bg-zinc-800 px-1.5 py-0.5 rounded">ascii_art</code>
      config option or suppress it entirely with
      <code class="text-sm font-mono text-zinc-100 bg-zinc-800 px-1.5 py-0.5 rounded">--no-ascii</code>.
    </p>
  </section>

  <!-- Package Detection -->
  <section class="mt-12">
    <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Package Detection</h2>
    <p class="text-zinc-300 mb-4">
      betterfetch automatically detects your package manager and counts
      installed packages. Supported managers:
    </p>
    <div class="flex flex-wrap gap-2">
      {#each pkgManagers as pm}
        <span class="text-sm font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded">{pm}</span>
      {/each}
    </div>
  </section>
</div>
