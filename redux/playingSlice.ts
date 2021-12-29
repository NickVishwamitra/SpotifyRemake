import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mgkPlaylist } from "../playlists/playlists";

export interface PlayingState {
  playlistPlaying: string;
  globalPlaying: boolean;
  playingUrl: string;
  songDuration: any;
  playedSeconds: any;
  playerVolume: number;
  currentPlaylistInfo: any;
  currentTrackIndex: any;
}

const initialState: PlayingState = {
  playlistPlaying: "none",
  globalPlaying: false,
  playingUrl: "",
  songDuration: 0,
  playedSeconds: 0,
  playerVolume: 1,
  currentPlaylistInfo: mgkPlaylist,
  currentTrackIndex: 0,
};

export const playingSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylistPlaying: (state, action: PayloadAction<string>) => {
      state.playlistPlaying = action.payload;
    },
    toggleGlobalPlaying: (state) => {
      state.globalPlaying = !state.globalPlaying;
    },
    setGlobalPlaying: (state, action: PayloadAction<boolean>) => {
      state.globalPlaying = action.payload;
    },
    setPlayingUrl: (state, action: PayloadAction<string>) => {
      state.playingUrl = action.payload;
    },
    setSongDuration: (state, action: PayloadAction<any>) => {
      state.songDuration = action.payload;
    },
    setPlayedSeconds: (state, action: PayloadAction<any>) => {
      state.playedSeconds = action.payload;
    },
    setPlayerVolume: (state, action: PayloadAction<any>) => {
      state.playerVolume = action.payload;
    },
    setCurrentPlaylistInfo: (state, action: PayloadAction<boolean>) => {
      state.currentPlaylistInfo = action.payload;
    },
    setCurrentTrackIndex: (state, action: PayloadAction<number>) => {
      state.currentTrackIndex = action.payload;
    },
  },
});

export const {
  setPlaylistPlaying,
  toggleGlobalPlaying,
  setGlobalPlaying,
  setPlayingUrl,
  setSongDuration,
  setPlayedSeconds,
  setPlayerVolume,
  setCurrentPlaylistInfo,
  setCurrentTrackIndex,
} = playingSlice.actions;

export default playingSlice.reducer;
