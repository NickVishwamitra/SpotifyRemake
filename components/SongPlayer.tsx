import { useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { modSunPlaylist } from "../playlists/playlists";
import {
  setPlayedSeconds,
  setSongDuration,
  setPlayingUrl,
  setCurrentTrackIndex,
  toggleGlobalPlaying,
} from "../redux/playingSlice";
import { RootState } from "../redux/store";

const SongPlayer = () => {
  const globalPlaying = useSelector(
    (state: RootState) => state.playingControls.globalPlaying
  );
  const playingUrl = useSelector(
    (state: RootState) => state.playingControls.playingUrl
  );
  const playerVolume = useSelector(
    (state: RootState) => state.playingControls.playerVolume
  );

  const currentPlaylistInfo = useSelector(
    (state: RootState) => state.playingControls.currentPlaylistInfo
  );
  const currentTrackIndex = useSelector(
    (state: RootState) => state.playingControls.currentTrackIndex
  );

  const dispatch = useDispatch();

  return (
    <ReactPlayer
      style={{ display: "none" }}
      url={playingUrl}
      // muted={isPlayerMuted}
      playing={globalPlaying}
      volume={playerVolume}
      onDuration={(duration) => {
        dispatch(setSongDuration(duration));
      }}
      onProgress={(played) => {
        // console.log(played.playedSeconds);
        dispatch(setPlayedSeconds(played.playedSeconds));
      }}
      onEnded={() => {
        dispatch(setCurrentTrackIndex(currentTrackIndex + 1));
        dispatch(toggleGlobalPlaying());
        dispatch(toggleGlobalPlaying());
      }}
      controls={true}
    />
  );
};
export default SongPlayer;
