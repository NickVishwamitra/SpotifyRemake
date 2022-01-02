import {
  Text,
  Image,
  Button,
  Slider as ManSlider,
  Divider,
} from "@mantine/core";
import { Stack, Slider } from "@mui/material";
import { Progress, Tooltip } from "@nextui-org/react";
import {
  ArrowsOutSimple,
  DesktopTower,
  Heart,
  Microphone,
  Pause,
  PauseCircle,
  Play,
  PlayCircle,
  Queue,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  SpeakerLow,
  SpeakerX,
} from "phosphor-react";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPlaylistInfo,
  setCurrentTrackIndex,
  setPlayerVolume,
  setPlayingUrl,
  toggleGlobalPlaying,
} from "../redux/playingSlice";
import { RootState } from "../redux/store";
const PlayerControls = () => {
  const songDuration = useSelector(
    (state: RootState) => state.playingControls.songDuration
  );
  const globalPlaying = useSelector(
    (state: RootState) => state.playingControls.globalPlaying
  );
  const playedSeconds = useSelector(
    (state: RootState) => state.playingControls.playedSeconds
  );
  const currentTrackIndex = useSelector(
    (state: RootState) => state.playingControls.currentTrackIndex
  );
  const currentPlaylistInfo = useSelector(
    (state: RootState) => state.playingControls.currentPlaylistInfo
  );

  const [volumeValue, setVolumeValue] = useState<number>(100);
  const [popoverOpened, setPopoverOpened] = useState(true);

  const handleChange = (event: Event, newValue: any) => {
    setVolumeValue(newValue as number);
    dispatch(setPlayerVolume(newValue / 100));
  };

  useEffect(() => {
    dispatch(
      setPlayingUrl(currentPlaylistInfo?.tracks[currentTrackIndex]?.url)
    );
  }, [currentTrackIndex]);

  const [currentSongDuration, setSongDuration] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      style={{
        height: "10%",
        width: "100%",
        backgroundColor: "#191819",
        position: "fixed",
        zIndex: "1000",
        top: "90%",
        display: "flex",
        padding: "1%",
        gap: "5%",
      }}
    >
      <div style={{ display: "flex", gap: "5%", width: "20%" }}>
        <img src={currentPlaylistInfo.tracks[currentTrackIndex]?.pic} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "25%",
            justifyContent: "center",
          }}
        >
          <Text size="sm" lineClamp={1}>
            {currentPlaylistInfo.tracks[currentTrackIndex]?.title}
          </Text>
          <Text size="xs" lineClamp={1}>
            {currentPlaylistInfo.tracks[currentTrackIndex]?.author}
          </Text>
        </div>
        <Heart style={{ alignSelf: "center" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", gap: "5%", alignItems: "center" }}>
          <Shuffle size={30}></Shuffle>
          <SkipBack
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(setCurrentTrackIndex(currentTrackIndex - 1));
            }}
          ></SkipBack>
          {globalPlaying ? (
            <PauseCircle
              size={50}
              weight="fill"
              cursor="pointer"
              onClick={() => dispatch(toggleGlobalPlaying())}
            />
          ) : (
            <PlayCircle
              cursor="pointer"
              size={50}
              weight="fill"
              onClick={() => dispatch(toggleGlobalPlaying())}
            ></PlayCircle>
          )}
          <SkipForward
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => {
              if (currentTrackIndex == currentPlaylistInfo.tracks.length - 1) {
                dispatch(setCurrentTrackIndex(0));
              } else dispatch(setCurrentTrackIndex(currentTrackIndex + 1));
            }}
          ></SkipForward>
          <Repeat size={30}></Repeat>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text size="xs">{secondsToTime(playedSeconds)}</Text>
          {/* <Progress
            value={(playedSeconds / songDuration) * 100}
            color="success"
            size="xs"
          ></Progress> */}
          <ManSlider
            value={(playedSeconds / songDuration) * 100}
            style={{ width: "100%" }}
            color="green"
            label={secondsToTime(playedSeconds)}
            size="xs"
          ></ManSlider>
          <Text size="xs">{secondsToTime(songDuration)}</Text>
        </div>
      </div>
      <div
        style={{
          width: "20%",
          display: "flex",
          alignItems: "center",
          gap: "5%",
        }}
      >
        <Microphone size={30} />
        <Tooltip
          trigger="click"
          content={<QueueItems />}
          // style={{ backgroundColor: "#1C1C1F" }}
          color="success"
        >
          <Queue
            size={15}
            onClick={() => setPopoverOpened(!popoverOpened)}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>

        <DesktopTower size={30} />
        {volumeValue >= 50 ? (
          <SpeakerHigh
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => {
              dispatch(setPlayerVolume(0));
              setVolumeValue(0);
            }}
          />
        ) : volumeValue < 50 && volumeValue > 0 ? (
          <SpeakerLow
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(setPlayerVolume(0));
              setVolumeValue(0);
            }}
          />
        ) : (
          <SpeakerX
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(setPlayerVolume(100));
              setVolumeValue(100);
            }}
          />
        )}
        <Slider
          aria-label="Volume"
          value={volumeValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
        <ArrowsOutSimple size={30} />
      </div>
    </div>
  );
};
export default PlayerControls;

function secondsToTime(e: any) {
  var h = Math.floor(e / 3600)
      .toString()
      .padStart(2, "0"),
    m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(e % 60)
      .toString()
      .padStart(2, "0");

  return m + ":" + s;
  //return `${h}:${m}:${s}`;
}

const QueueItems = () => {
  const currentPlaylistInfo = useSelector(
    (state: RootState) => state.playingControls.currentPlaylistInfo
  );
  const currentTrackIndex = useSelector(
    (state: RootState) => state.playingControls.currentTrackIndex
  );

  const globalPlaying = useSelector(
    (state: RootState) => state.playingControls.globalPlaying
  );
  const dispatch = useDispatch();
  // const [buttonVisible, setButtonVisible] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "900px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {currentPlaylistInfo.tracks.map((track: any, index: number) => (
        <Fragment>
          <Divider></Divider>
          <div
            style={{
              display: "flex",
              margin: "5%",
              width: "250px",
              gap: "5%",
              paddingRight: "10%",
              cursor: "pointer",
            }}
            onClick={() => dispatch(setCurrentTrackIndex(index))}
          >
            <Image src={track.pic} height={50} width={50} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }} weight={700}>
                {track.title}
              </Text>
              <Text style={{ color: "white" }}>{track.author}</Text>
            </div>
            <Button
              onClick={() => dispatch(toggleGlobalPlaying())}
              style={{
                marginLeft: "auto",
                visibility: currentTrackIndex == index ? "visible" : "hidden",
                alignSelf: "center",
              }}
            >
              {globalPlaying ? (
                <Pause weight="fill"></Pause>
              ) : (
                <Play weight="fill" />
              )}
            </Button>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
