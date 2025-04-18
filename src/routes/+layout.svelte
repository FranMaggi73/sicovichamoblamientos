<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<div class="flex flex-col min-h-screen relative">
  <div
    class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-base-300/30 via-transparent to-transparent -z-20"
  />
  <div
    class="absolute inset-0 bg-gradient-to-t from-base-300/20 via-transparent to-base-300/20 -z-30"
  />

  <Header />

  <div class="flex-1">
    <slot />
  </div>

  <Footer />
</div>
