<script lang="ts">
  import { Capacity } from "../models/capacity";
  import { Video } from "../stores/video.store";

  export let capacities: Capacity[];
  const isFinish = Video.isFinish;

  function capacitySelected(capacity: Capacity) {
    Video.playVideo({video: capacity.video, name: capacity.name});
  }
</script>

{#if $isFinish}
    <div class="fixed left-[200px] top-[20%] z-30 w-[800px] p-5 bg-slate-600">
    {#each capacities as capacity}
      <div class="flex items-center" on:click|preventDefault={() => capacitySelected(capacity)}>
        <img class="w-20 mr-5" src={capacity.image} alt="" />
        <div>
          <h3 class="text-orange-400"><b>{capacity.name}</b></h3>
          <p>{capacity.description}</p>
        </div>
      </div>
    {/each}
  </div>
{/if}

