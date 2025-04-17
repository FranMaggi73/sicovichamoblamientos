<script lang="ts">
  import { pageTitle } from '../../store/titleStore';

</script>

<main class="sticky z-10 top-0 bg-base-100 p-0 m-0">
  <div class="navbar p-0 m-0 relative">
    <div class="absolute left-1/2 -translate-x-1/2 hidden sm:block">
      <p class="text-3xl font-semibold">{$pageTitle}</p>
    </div>

    <div class="flex-1 flex items-center justify-end gap-4">
    </div>
  </div>

  <div class="divider m-0 p-0" />
</main>
