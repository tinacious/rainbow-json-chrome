<script lang="ts">
  // constants
  const marginSize = 2;

  // props
  export let data: unknown;
  export let name: string | number;
  export let level: number;
  export let isLastItem: boolean;

  // state
  let open: boolean = true;

  const toggleOpen = () => {
    open = !open;
  };

  const isJsonObject = (data: unknown): boolean =>
    data?.constructor?.name === "Object";

  const getPrintedData = (data: unknown): string =>
    typeof data === "string" ? `"${data}"` : String(data);
</script>

<div
  class="json-tree relative px-6 py-1"
  style="margin-left: {level * marginSize}px"
>
<!-- <div
  class="json-tree relative px-6 py-1 hover:bg-td_grey_200/5 dark:hover:bg-td_grey_1200/5"
  style="margin-left: {level * marginSize}px"
> -->
  <div class="   top-0 left-0 -ml-8">
    <!-- Toggle -->
    {#if typeof data === "string" || typeof data === "number" || typeof data === "boolean"}
      {""}
    {:else}
      <button
        class="w-5 h-5 mr-2 dark:bg-td_grey_400 disabled:opacity-40"
        disabled={Array.isArray(data) && !data.length}
        on:click={toggleOpen}
      >
        <!-- TODO: icon -->
        {open ? "-" : "+"}
      </button>
    {/if}

    {#if name && typeof name === "string"}
      "{name}"
    {/if}
    {#if Array.isArray(data)}
      {"["}
    {:else if isJsonObject(data)}
      {"{"}
    {/if}
  </div>

  <div style="display: {open ? 'block' : 'none'}">
    {#if Array.isArray(data)}
      {#each data as item, i}
        <svelte:self
          isLastItem={i === data.length - 1}
          data={item}
          name={i}
          level={level + 1}
        />
      {/each}
    {:else if isJsonObject(data)}
      {#each Object.keys(data) as k, j}
        {#if Array.isArray(data[k])}
          <svelte:self
            data={data[k]}
            isLastItem={j === Object.keys(data).length - 1}
            name={typeof k === "string" ? k : ""}
            level={level + 1}
          />
        {:else if isJsonObject(data[k])}
          <svelte:self
            data={data[k]}
            isLastItem={j === Object.keys(data).length - 1}
            name={k}
            level={level + 1}
          />
        {:else}
          <span style="margin-left: {level * marginSize}px">
            <span
              style="width: {marginSize}px; height: {marginSize}px; margin-right: {marginSize}px;"
            >
              "{k}": {getPrintedData(data[k])}

              {#if j < level - 1}
                <span class="-ml-3">{","}</span>

                <br />
              {/if}
            </span>
          </span>
        {/if}
      {/each}
    {:else}
      <span>{getPrintedData(data)}</span>
    {/if}
  </div>

  {#if Array.isArray(data)}
    <span class="-ml-6">
      {"]"}
    </span>
    {#if !isLastItem}
      <span class="-ml-2">{","}</span>
      <br />
    {/if}
  {:else if isJsonObject(data)}
    <span class="-ml-5">
      {"}"}
      {#if !isLastItem}
        <span class="-ml-2">{","}</span>
        <br />
      {/if}
    </span>
  {/if}
</div>

<style lang="css">
</style>
