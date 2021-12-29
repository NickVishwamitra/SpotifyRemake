import { Avatar, Badge, Input, MantineProvider } from "@mantine/core";
import { NextPage } from "next";
import router from "next/router";
import { ArrowLeft, CaretDown, CaretLeft, CaretRight } from "phosphor-react";
import { Fragment, useContext } from "react";
import ReactPlayer from "react-player";
import Navigation from "../components/Navigation";
import PlayerControls from "../components/PlayerControls";

const SearchPage: NextPage = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "dark",
      }}
    >
      <div style={{ height: "auto", width: "100%", display: "flex" }}>
        <Navigation selected="search" />
        <PlayerControls />
        <div
          style={{
            width: "85%",
            backgroundColor: "#1212",
            minHeight: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "fixed",
              height: "8%",
              backgroundColor: "#1212",
              alignItems: "center",
              width: "85%",
              padding: "0% 2%",
              gap: "2%",
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

            <Input size="md" style={{ width: "40%" }} radius="xl"></Input>
            <Badge
              color="dark"
              style={{
                backgroundColor: "black",
                paddingLeft: "0",
                fontSize: 10,
                marginLeft: "auto",
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
              Nick Vishwamitra
            </Badge>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};
export default SearchPage;
