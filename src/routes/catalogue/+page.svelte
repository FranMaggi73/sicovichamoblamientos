<script lang="ts">
  import { products } from '$lib/types';
</script>

<main class="flex-1 pb-32 sm:pb-16 w-full max-w-screen-xl mx-auto">
  <section class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
    {#each products as product}
      <div
        class="card w-full bg-base-200 shadow-xl transition-transform duration-300 hover:scale-105"
      >
        <a href={`/product/${product.id.toString()}`}>
          <figure>
            <img
              src={product.image}
              alt={product.name}
              class="h-48 w-full object-cover rounded-t"
            />
          </figure>
        </a>
        <div class="card-body">
          <h2 class="card-title text-sm justify-center">{product.name}</h2>
          <div class="card-actions justify-end mt-2 w-full">
            <div class="flex items-center gap-1"></div>
          </div>
        </div>
      </div>
    {/each}
  </section>
</main>
