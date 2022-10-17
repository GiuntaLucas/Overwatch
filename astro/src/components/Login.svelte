<script lang="ts">
  import { User } from "../models/user";
  import { notification } from "../stores/notification.store";
  import { user as u } from "../stores/user.store";


  const user: User = { battleTag: "", password: "" };
  function login() {
    if (user.password !== "overwatch") {
        notification.display({message: 'Ta foireyyyyyyyyyy idiot !!!', severity: "error"});
        reset();
        return;
    }
    u.set(user);
    location.replace("heroes");
  }
  function reset() {
    user.battleTag = '';
    user.password = '';
  }
</script>

<form on:submit|preventDefault={login}>
  <div>
    <div class="pb-2">
      <img class="w-[300px]" src="/team_foireyyy_logo.png" alt="foireyyyy" />
    </div>
    <div class="flex flex-col pb-2">
      <label for="battletag">BattleTag</label>
      <input bind:value={user.battleTag} name="battletag" type="text" />
    </div>
    <div class="flex flex-col pb-2">
      <label for="password">Password</label>
      <input bind:value={user.password} name="password" type="password" />
    </div>
    <div class="pb-2">
      <button type="submit">Login</button>
      <a href="heroes" class="italic">Continues as guest</a>
    </div>
  </div>
</form>
