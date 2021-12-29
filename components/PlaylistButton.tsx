import { Button, Card, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { Pause, Play } from "phosphor-react";
import { forwardRef, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayerPlayingContext } from "../pages/_app";
import { RootState } from "../redux/store";
import {
  setCurrentPlaylistInfo,
  setCurrentTrackIndex,
  setPlayingUrl,
  setPlaylistPlaying,
  toggleGlobalPlaying,
} from "../redux/playingSlice";

import Image from "next/image";
const PlaylistButton = (props: any) => {
  const playlistPlaying = useSelector(
    (state: RootState) => state.playingControls.playlistPlaying
  );
  const globalPlaying = useSelector(
    (state: RootState) => state.playingControls.globalPlaying
  );
  const currentPlaylistInfo = useSelector(
    (state: RootState) => state.playingControls.currentPlaylistInfo
  );
  const currentTrackIndex = useSelector(
    (state: RootState) => state.playingControls.currentTrackIndex
  );
  const dispatch = useDispatch();

  const [buttonVisible, setButtonVisible] = useState(false);
  const [bgColor, setBgColor] = useState("rgba(37,38,43, 0.5)");
  const CardComponent = forwardRef((_props, ref: any) => {
    return (
      <Card
        style={{
          width: "22%",
          display: "flex",
          backgroundColor: bgColor,
          alignItems: "center",
          maxHeight: "75%",
          gap: "5%",
          cursor: "pointer",
        }}
        onMouseEnter={() => {
          setButtonVisible(true);
          setBgColor("#3b3b3b");
        }}
        onMouseLeave={() => {
          props.playlistNum == playlistPlaying ? null : setButtonVisible(false);
          setBgColor("rgba(37,38,43, 0.5)");
        }}
        padding={0}
      >
        <Image src={props.image} width="90%" height="100%"></Image>
        <Title order={4}>{props.title}</Title>
        <MotionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: buttonVisible ? 1 : 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></MotionButton>
      </Card>
    );
  });
  const MotionCard = motion(CardComponent);

  const ButtonComponent = forwardRef((_props, ref: any) => {
    return (
      <Button
        ref={ref}
        onClick={() => {
          if (playlistPlaying != props.playlistNum) {
            dispatch(setCurrentTrackIndex(0));
          }
          dispatch(toggleGlobalPlaying());

          dispatch(setPlaylistPlaying(props.playlistNum));

          dispatch(setCurrentPlaylistInfo(props.playlist));
          dispatch(
            setPlayingUrl(props.playlist.tracks[currentTrackIndex]?.url)
          );
        }}
        style={{
          backgroundColor: "#1CCD5A",
          position: "absolute",
          left: "75%",
        }}
      >
        {props.playlistNum == playlistPlaying && globalPlaying ? (
          <Pause weight="fill"></Pause>
        ) : (
          <Play weight="fill"></Play>
        )}
      </Button>
    );
  });
  const MotionButton = motion(ButtonComponent);

  return (
    <MotionCard
      {...props}
      whileHover={{ backgroundColor: "black" }}
    ></MotionCard>
  );
};
export default PlaylistButton;
