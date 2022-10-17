<script>
  import { user } from "../stores/user.store";
  const currentUser = user.value;

  function handleClick() {
    if($currentUser) {
        user.set(null);
    }
    location.replace('/');
  }
</script>

<button type="button" on:click={handleClick}>
  {#if $currentUser}
    Logout
  {:else}
    Login
  {/if}
</button>
