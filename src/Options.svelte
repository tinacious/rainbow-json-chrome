<script lang="ts">
  import { onMount } from "svelte";
  import { getIgnoreList, saveIgnoreList } from "./lib/storage";

  let ignoreListFormValue: string = "";

  onMount(() => {
    getIgnoreList().then((ignorelist) => {
      ignoreListFormValue = ignorelist.join("\n");
    });
  });
</script>

<main>
  <div class="max-w-xl m-auto py-4">
    <h1
      class="font-bold text-xl inline-block bg-gradient-to-r from-td_pink to-td_purple via-td_blue text-transparent bg-clip-text"
    >
      Rainbow JSON Settings
    </h1>

    <section class="my-4">
      <h2 class="text-lg font-bold">Ignorelist</h2>
      <p>
        If you don't want to run <strong>Rainbow JSON</strong> on some URLs, add
        those URLs here, one on each line.
      </p>

      <textarea
        value={ignoreListFormValue}
        on:change={(e) => {
          ignoreListFormValue = e.currentTarget.value;
        }}
        class="w-full h-[200px] my-3 rounded-md py-3 px-4 outline-none border-2 border-td_grey_1100 dark:border-td_grey_500 focus:border-td_pink"
      ></textarea>

      <button
        class="btn"
        on:click={() => {
          saveIgnoreList(ignoreListFormValue);
        }}>Save</button
      >
    </section>

    <!-- <hr class="divider" /> -->
  </div>
</main>

<style>
</style>
