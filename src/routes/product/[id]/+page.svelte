<script lang="ts">
  import type { Product } from '$lib/types';
  import { pageTitle } from '../../../store/titleStore';

  export let data: { product: Product };

  pageTitle.set(data.product.name);
</script>

<main class="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <article
    class="flex flex-col lg:flex-row gap-8 lg:gap-12 skeleton bg-base-300 rounded-xl p-6 sm:p-8 shadow-lg"
  >
    <div class="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
      <img
        src={data.product.image}
        alt={data.product.name}
        class="w-full max-w-md lg:max-w-none h-auto max-h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div class="flex flex-col gap-4 flex-1">
      <h1 class="text-3xl sm:text-4xl font-bold text-secondary">
        {data.product.name}
      </h1>

      <p class="text-lg sm:text-xl text-primary">
        {data.product.description}
      </p>

      <div class="mt-4 flex items-center gap-4">
        <span class="text-2xl sm:text-3xl font-bold text-accent">
          $ {data.product.price.toLocaleString()}
        </span>
      </div>
    </div>
  </article>
</main>
