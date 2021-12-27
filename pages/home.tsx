import { NextPage } from "next";
import { forwardRef, Fragment, useContext, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import { CaretLeft, CaretDown, CaretRight, Play, Pause } from "phosphor-react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Container,
  Popover,
  Text,
  Title,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import { PlayerMutedContext, PlayerPlayingContext } from "../pages/_app";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PlaylistButton from "../components/PlaylistButton";
import bollywoodPic from "../assets/bollywood.png";
import repeatPic from "../assets/repeat.png";
import rnbPic from "../assets/r&b.png";
import allNightPic from "../assets/allNighter.png";
import lofiPic from "../assets/lofiPic.png";
import mgkPic from "../assets/mgk.png";
import modPic from "../assets/modSun.png";
import blackbearPic from "../assets/blackbear.png";

const HomePage: NextPage = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [navBG, setNavBG] = useState("rgba(0,0,0,0)");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const homeRef = useRef();
  const router = useRouter();
  const { isPlayerPlaying, setIsPlayerPlaying } =
    useContext(PlayerPlayingContext);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        maxHeight: "100%",
      }}
    >
      <Navigation selected="home" />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(93,70,75,1) 0%, rgba(18,18,18,1) 10%)",
          minHeight: "100%",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "8%",
            alignItems: "center",
            width: "100%",
            padding: "0% 2%",
            position: "fixed",
            zIndex: "10000",
            backgroundColor: scroll.y > 50 ? "#5d464b" : "rgba(0,0,0,0)",
          }}
        >
          <div style={{ display: "flex", gap: "15%" }}>
            <Avatar
              style={{ backgroundColor: "black", cursor: "pointer" }}
              radius="xl"
              size="md"
              onClick={() => router.back()}
            >
              <CaretLeft weight="bold" size={25}></CaretLeft>
            </Avatar>
            <Avatar
              style={{ backgroundColor: "black", cursor: "pointer" }}
              radius="xl"
            >
              <CaretRight weight="bold" size={25}></CaretRight>
            </Avatar>
          </div>
          <Popover
            style={{ marginLeft: "65vw" }}
            opened={popoverOpen}
            position="bottom"
            onClose={() => setPopoverOpen(false)}
            target={
              <Badge
                color="dark"
                onClick={() => setPopoverOpen(!popoverOpen)}
                style={{
                  backgroundColor: "black",
                  paddingLeft: "0",
                  fontSize: 10,

                  cursor: "pointer",
                }}
                leftSection={
                  <Avatar
                    alt="Avatar for badge"
                    size={30}
                    radius="xl"
                    style={{ marginRight: 5 }}
                  ></Avatar>
                }
                rightSection={<CaretDown></CaretDown>}
                size="xl"
              >
                Nick V
              </Badge>
            }
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text>Account</Text>
              <Text>Settings</Text>
              <Text>Log Out</Text>
            </div>
          </Popover>
        </div>
        <Title style={{ margin: "5% 2.5%", marginBottom: "2%" }}>
          Good Evening
        </Title>
        <div
          style={{
            height: "30%",
            display: "flex",
            flexDirection: "column",
            marginLeft: "2.5%",
          }}
        >
          <div style={{ height: "50%", display: "flex", gap: "1%" }}>
            {/* <MotionCard whileHover={{ scale: 0.8 }}></MotionCard>
            <MotionCard whileHover={{ scale: 0.8 }}></MotionCard>
            <MotionCard whileHover={{ scale: 0.8 }}></MotionCard>
            <MotionCard whileHover={{ scale: 0.8 }}></MotionCard> */}
            <PlaylistButton
              playlistNum="p1"
              title="Bollywood"
              image={bollywoodPic}
              url="https://www.youtube.com/watch?v=gejR1jDhwec"
            ></PlaylistButton>
            <PlaylistButton
              playlistNum="p2"
              title="Repeat"
              image={repeatPic}
              url="https://www.youtube.com/watch?v=LphfjxuIbIM"
            ></PlaylistButton>
            <PlaylistButton
              playlistNum="p3"
              image={rnbPic}
              title="RnB"
              url="https://www.youtube.com/watch?v=H5-qGFO138E"
            ></PlaylistButton>
            <PlaylistButton
              playlistNum="p4"
              image={allNightPic}
              title="All-Nighter"
              url="https://www.youtube.com/watch?v=nxEgxfHUvE8"
            ></PlaylistButton>
          </div>
          <div style={{ height: "50%", display: "flex", gap: "1%" }}>
            <PlaylistButton
              playlistNum="p5"
              title="Lofi hip hop music"
              image={lofiPic}
              url="https://www.youtube.com/watch?v=8UdFjRUH9oY"
            ></PlaylistButton>
            <PlaylistButton
              playlistNum="p6"
              title="Machine Gun Kelly"
              image={mgkPic}
              url="https://www.youtube.com/watch?v=28PwRWXQ6Pw"
            ></PlaylistButton>
            <PlaylistButton
              playlistNum="p7"
              image={modPic}
              title="Mod Sun"
              url="https://www.youtube.com/watch?v=BIu7D0HmpNc"
            ></PlaylistButton>
            <PlaylistButton
              playlistNum="p8"
              image={blackbearPic}
              title="Blackbear"
              url="https://www.youtube.com/watch?v=pfv4GV7Ll-Y"
            ></PlaylistButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
