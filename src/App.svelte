<script lang="ts">
  import JsonTree from "./lib/JsonTree.svelte";

  export let jsonObject: unknown;
</script>

<main>
  <div class="p-4">
    <JsonTree parent="" data={jsonObject} name="" isLastItem={true} level={0} />
  </div>
</main>

<style>
</style>
