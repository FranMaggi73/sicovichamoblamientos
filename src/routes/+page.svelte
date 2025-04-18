<script lang="ts">
  import { products } from '$lib/types';
  import { onMount, onDestroy } from 'svelte';

  let currentIndex = 0;
  let intervalId: number;

  const animations = ['slide-left', 'slide-down', 'slide-up'];

  onMount(() => {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % products.length;
    }, 6000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  function getAnimation(index: number) {
    return animations[index % animations.length];
  }
</script>

<main class="flex-1 flex flex-col w-full overflow-x-auto min-h-screen relative">
  <p class="text-3xl font-semibold text-neutral px-2 mx-auto mt-8 sm:w-1/2 md:w-1/2 w-full">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi unde quidem nemo quaerat iure
    alias placeat repellat eius eligendi incidunt deleniti dolorum, facilis, architecto a doloremque
    expedita, cum id quo!
  </p>
  <div class="relative w-full sm:w-1/2 md:w-1/2 mt-8 mx-auto md:h-64 px-4 md:px-0 sm:px-0 z-0">
    <div class="relative h-64 md:h-full overflow-hidden">
      {#each products as product, i}
        <div
          class={` top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-1000 ${getAnimation(i)} ${i === currentIndex ? 'show z-10' : 'z-0'}`}
          style="pointer-events: none"
        >
          <div class="flex items-center h-full w-full">
            <div class="hidden md:block md:w-1/2"></div>
            <div class="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                class="h-full object-contain rounded-lg pointer-events-none"
              />
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div
      class="md:absolute md:left-0 md:top-0 md:h-full md:w-1/2 flex flex-col justify-center px-4 mt-4 md:mt-0"
    >
      <h2 class="text-2xl font-bold text-neutral mb-2">Título Fijo</h2>
      <p class="text-lg text-neutral">Descripción fija que permanece visible siempre</p>
    </div>
  </div>
  <button class="btn btn-accent mx-auto mt-12 text-2xl text-base-100">Ve nuestro catalogo</button>
</main>

<style>
  .slide-left {
    opacity: 0;
    transition:
      transform 2s ease,
      opacity 2s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .slide-down {
    opacity: 0;
    transition:
      transform 2s ease,
      opacity 2s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .slide-up {
    opacity: 0;
    transition:
      transform 2s ease,
      opacity 2s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slide-left {
    transform: translateX(100%);
  }
  .slide-left.show {
    transform: translateX(0);
    opacity: 1;
  }

  .slide-down {
    transform: translateY(-100%);
  }
  .slide-down.show {
    transform: translateY(0);
    opacity: 1;
  }

  .slide-up {
    transform: translateY(100%);
  }
  .slide-up.show {
    transform: translateY(0);
    opacity: 1;
  }
</style>
