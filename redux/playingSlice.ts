import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlayingState {
  playlistPlaying: string;
  globalPlaying: boolean;
  playingUrl: string;
}

const initialState: PlayingState = {
  playlistPlaying: "none",
  globalPlaying: false,
  playingUrl: "",
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
  },
});

export const {
  setPlaylistPlaying,
  toggleGlobalPlaying,
  setGlobalPlaying,
  setPlayingUrl,
} = playingSlice.actions;

export default playingSlice.reducer;
