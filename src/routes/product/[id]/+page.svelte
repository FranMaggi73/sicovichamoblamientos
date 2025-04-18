<script lang="ts">
  import type { Product } from '$lib/types';

  export let data: { product: Product };
</script>

<main class="flex flex-col bg-base-100">
  <div
    class="w-full mx-auto px-4 sm:px-6 lg:px-8
           py-4 sm:py-6 lg:py-8
           flex items-center justify-center text-center"
  >
    <article
      class="grid grid-cols-1 md:grid-cols-2 gap-6
                    bg-base-200 rounded-2xl
                    p-6
                    shadow-lg w-full mx-2"
    >
      <div class="flex items-center justify-center h-56">
        <img
          src={data.product.image}
          alt={data.product.name}
          class=" h-full object-contain object-center rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div class="flex flex-col p-2 justify-center items-start">
        <h1 class="text-3xl font-bold text-accent mb-2 sm:mb-4">
          {data.product.name}
        </h1>

        <p
          class="text-lg text-neutral font-medium sm:font-semibold leading-normal sm:leading-relaxed"
        >
          {data.product.description}
        </p>
      </div>
    </article>
  </div>
</main>
