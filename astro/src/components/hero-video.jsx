import { useEffect, useLayoutEffect, useState } from "react";
import { Video } from "../stores/video.store";
import { tap } from "rxjs/operators";
const HeroVideo = ({ hero }) => {
  let player;
  const [name, setName] = useState(hero.name);
  const [url, setUrl] = useState(hero.videoHeader);
  const [change, setChange] = useState(null);
  useLayoutEffect(() => {
    Video.play.pipe(
      tap(data => setChange(data)),
      ).subscribe();
  }, [])

  useEffect(() => {
    if(change) {
      Video.finish(false);
      player.pause();
      player.loop = false;
      setUrl(change.video);
      setName(change.name);
      player.play();
    }
  }, [change])

  function handleEndedVideo() {
    player.pause();
    setUrl(hero.videoBackground);
    setName(hero.name);
    player.loop = true;
    Video.finish(true);
  }
  return (
     <>
      <h1 className="z-50 fixed top-0 left-[45%] text-orange-400" style={{fontSize: '3em'}}>{name}</h1>
      <video
      className="z-20 fixed top-0 left-0"
        ref={ref => player = ref}
        src={url}
        muted
        autoPlay
        onEnded={handleEndedVideo}
      ></video>
    </>
    
  );
};

export default HeroVideo;
