import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/video.mp4";
import { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const stopVideo = useRef();

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
      stopVideo.current.pause();
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} controls ref={stopVideo}></video>
    </div>
  );
};

export default VideoPlayer;
