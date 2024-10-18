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

  const hasNested = Array.isArray(data) || isJsonObject(data);
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
        class="py-[1px] px-[2px] bg-td_grey_1200 hover:bg-td_grey_1100 active:bg-td_grey_1000 dark:bg-td_grey_300 hover:dark:bg-td_grey_400 active:dark:bg-td_grey_500 dark:text-td_grey_1100 disabled:opacity-40 rounded-md"
        disabled={Array.isArray(data) && !data.length}
        on:click={toggleOpen}
      >
        {#if open}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.25017 7.034L12.0002 13.784L18.7502 7.034L20.3412 8.62499L12.0002 16.966L3.65918 8.62499L5.25017 7.034Z"
              fill="currentColor"
            />
          </svg>
        {:else}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.8295 4.4545C8.26884 4.01517 8.98116 4.01517 9.4205 4.4545L16.1705 11.2045C16.6098 11.6438 16.6098 12.3562 16.1705 12.7955L9.4205 19.5455C8.98116 19.9848 8.26884 19.9848 7.8295 19.5455C7.39017 19.1062 7.39017 18.3938 7.8295 17.9545L13.784 12L7.8295 6.0455C7.39017 5.60616 7.39017 4.89384 7.8295 4.4545Z"
              fill="currentColor"
            />
          </svg>
        {/if}
      </button>
    {/if}

    {#if name && typeof name === "string"}
      <span class="parens">"</span><span
        class="json-prop prop-level-{hasNested ? level - 1 : level}"
        >{name}</span
      ><span class="parens">"</span>
      <span class="colon">:</span>
    {/if}
    {#if Array.isArray(data)}
      <span class="bracket">
        {"["}
      </span>
    {:else if isJsonObject(data)}
      <span class="brace">
        {"{"}
      </span>
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
              <span class="parens">"</span><span
                class="json-prop prop-level-{level}">{k}</span
              ><span class="parens">"</span>
              <span class="colon">:</span>

              {#if typeof data[k] === "string"}
                <span class="parens">"</span><span class="token-string"
                  >{data[k]}</span
                ><span class="parens">"</span>
              {:else if typeof data[k] === "number"}
                <span class="token-number">{data[k]}</span>
              {:else if typeof data[k] === "boolean"}
                <span class="token-boolean">{data[k]}</span>
              {/if}

              <!-- todo: fix -->
              <span class="-ml-3">{","}</span>
              <br />
            </span>
          </span>
        {/if}
      {/each}
    {:else}
      {#if typeof data === "string"}
        <span class="parens">"</span><span class="token-string">{data}</span
        ><span class="parens">"</span>
      {:else if typeof data === "number"}
        <span class="token-number">{data}</span>
      {:else if typeof data === "boolean"}
        <span class="token-boolean">{data}</span>
      {/if}

      {#if !isLastItem}
        <span class="-ml-3">{","}</span>
      {/if}
    {/if}
  </div>

  {#if Array.isArray(data)}
    <span class="bracket -ml-6">
      {"]"}
    </span>
    {#if !isLastItem}
      <span class="-ml-2">{","}</span>
      <br />
    {/if}
  {:else if isJsonObject(data)}
    <span class="-ml-5">
      <span class="brace">
        {"}"}
      </span>
      {#if !isLastItem}
        <span class="-ml-2">{","}</span>
        <br />
      {/if}
    </span>
  {/if}
</div>

<style lang="css">
</style>
