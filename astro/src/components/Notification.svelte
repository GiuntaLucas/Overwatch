<script lang="ts">
  import { fly } from "svelte/transition";
  import { notification } from "../stores/notification.store";
  const notif = notification.value;
</script>

{#if $notif}
  <div in:fly={{ x: 100, delay: 100 }} out:fly={{ x: 100, delay: 100 }}
    class="{$notif.severity === 'error'
      ? 'bg-red-500'
      : $notif.severity === 'warning'
      ? 'bg-orange-500'
      : 'bg-green-500'} p-2 fixed right-5 top-5 z-20 transition-all"
  >
    {$notif.message}
  </div>
{/if}
