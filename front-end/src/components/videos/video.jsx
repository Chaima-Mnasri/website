import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <h1>Video Player</h1>
      <video controls width="800">
        <source src="/videos/Bildschirmaufzeichnung.webm" type="video/webm" />
        Dein Browser unterstützt dieses Videoformat nicht.
      </video>
    </div>
  );
};

export default VideoPlayer;
