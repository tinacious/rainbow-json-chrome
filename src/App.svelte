<script lang="ts">
  import JsonTree from "./lib/JsonTree.svelte";
  import { copyTextToClipboard } from "./lib/utils";

  export let jsonObject: unknown;

  let showCheck = false;
</script>

<main>
  <div class="p-4 relative">
    <JsonTree parent="" data={jsonObject} name="" isLastItem={true} level={0} />

    <div class="fixed top-4 right-4">
      <button
        class="flex gap-1 items-center border backdrop-blur-sm border-td_grey_1100 dark:border-td_grey_500 hover:bg-white/50 dark:hover:bg-td_grey_500/50 dark:active:bg-td_grey_500/70 active:bg-white/70 rounded-md py-1 px-3"
        on:click={() => {
          copyTextToClipboard(JSON.stringify(jsonObject, null, 2), () => {
            showCheck = true;

            setTimeout(() => {
              showCheck = false;
            }, 2000);
          });
        }}
      >
        {#if showCheck}
          <span class="text-td_green">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.776 7.63081L10.3286 18.0276L5.34912 13.7595L6.6507 12.241L10.0712 15.1728L17.2238 6.36963L18.776 7.63081Z"
                fill="currentColor"
              />
            </svg>
          </span>

          Copied to clipboard!
        {:else}
          Copy raw JSON
        {/if}
      </button>
    </div>
  </div>
</main>

<style>
</style>
