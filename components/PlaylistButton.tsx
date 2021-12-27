import { Button, Card, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { Pause, Play } from "phosphor-react";
import { forwardRef, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayerPlayingContext } from "../pages/_app";
import { RootState } from "../redux/store";
import {
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
    const { isPlayerPlaying, setIsPlayerPlaying } =
      useContext(PlayerPlayingContext);

    const [specificPlaying, setSpecificPlaying] = useState(false);
    return (
      <Button
        ref={ref}
        onClick={() => {
          dispatch(setPlaylistPlaying(props.playlistNum));

          dispatch(toggleGlobalPlaying());
          setIsPlayerPlaying(!isPlayerPlaying);
          setSpecificPlaying(!specificPlaying);
          dispatch(setPlayingUrl(props.url));
        }}
        style={{
          backgroundColor: "#1CCD5A",
          position: "absolute",
          left: "75%",
        }}
      >
        {props.playlistNum == playlistPlaying && isPlayerPlaying ? (
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
