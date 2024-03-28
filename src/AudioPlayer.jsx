import React, { useRef } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  return (
    <div>
      <audio ref={audioRef} src={src} autoPlay />
    </div>
  );
};

export default AudioPlayer;
