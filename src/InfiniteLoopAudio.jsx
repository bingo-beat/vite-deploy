import React, { useEffect } from "react";

const InfiniteLoopAudio = ({ src }) => {
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src]);

  return null; // no need to render anything
};

export default InfiniteLoopAudio;
