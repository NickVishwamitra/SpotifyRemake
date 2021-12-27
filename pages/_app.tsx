import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "@mantine/core";
import ReactPlayer from "react-player";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "../redux/store";
import SongPlayer from "../components/SongPlayer";

export const PlayerPlayingContext = createContext({
  isPlayerPlaying: false,
  setIsPlayerPlaying: (_boolean: boolean) => {},
});
export const PlayerMutedContext = createContext({
  isPlayerMuted: true,
  setIsPlayerMuted: (_boolean: boolean) => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isPlayerPlaying, setIsPlayerPlaying] = useState(false);
  const playervalue = { isPlayerPlaying, setIsPlayerPlaying };
  const [isPlayerMuted, setIsPlayerMuted] = useState(true);
  const mutedvalue = { isPlayerMuted, setIsPlayerMuted };

  return (
    <PlayerPlayingContext.Provider value={playervalue}>
      <PlayerMutedContext.Provider value={mutedvalue}>
        <Provider store={store}>
          <Fragment>
            <Component {...pageProps} />
            <SongPlayer />
          </Fragment>
        </Provider>
      </PlayerMutedContext.Provider>
    </PlayerPlayingContext.Provider>
  );
}

export default MyApp;
