import { useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SongPlayer = () => {
  const globalPlaying = useSelector(
    (state: RootState) => state.playingControls.globalPlaying
  );
  const playingUrl = useSelector(
    (state: RootState) => state.playingControls.playingUrl
  );

  return (
    <ReactPlayer
      style={{ display: "none" }}
      url={playingUrl}
      // muted={isPlayerMuted}
      playing={globalPlaying}
      volume={1}
    />
  );
};
export default SongPlayer;
