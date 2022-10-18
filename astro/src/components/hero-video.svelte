<script>
  import { onMount } from "svelte";
  import { Video } from "../stores/video.store";

  export let hero;
  let player;
  let url = hero.videoHeader;
  let name = hero.name;

  function handleEndedVideo() {
    player.pause();
    url = hero.videoBackground;
    name = hero.name;
    player.loop = true;
    player.play();
    Video.finish(true);
  }

  onMount(() => {
    Video.play.subscribe((data) => {
      Video.finish(false);
      player.pause();
      player.loop = false;
      url = data.video;
      name = data.name;
      player.play();
    });
  });
</script>

<h1 class="z-50 w-screen flex justify-center fixed top-0 text-orange-400" style="font-size: 3em">
  {name}
</h1>
<video
  class="z-20 fixed top-0 left-0"
  bind:this={player}
  src={url}
  muted
  autoPlay
  on:ended={handleEndedVideo}
/>
