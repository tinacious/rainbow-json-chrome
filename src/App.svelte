<script lang="ts">
  import JsonTree from "./lib/JsonTree.svelte";

  export let jsonString: string;
</script>

<main>
  <div class="p-4">
    <JsonTree parent="" data={jsonString} name="" isLastItem={true} level={0} />
  </div>
</main>

<style>
</style>
