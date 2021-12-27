import { MantineProvider } from "@mantine/core";
import { NextPage } from "next";
import { Head } from "next/document";
import { Fragment } from "react";
import Navigation from "../components/Navigation";

const LibraryPage: NextPage = () => {
  return (
    <Fragment>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <div style={{ height: "auto", width: "100%", display: "flex" }}>
          <Navigation selected="library" />
          <div
            style={{
              width: "85%",
              backgroundColor: "blue",
              minHeight: "100%",
              padding: "2%",
            }}
          >
            gshrio
          </div>
        </div>
      </MantineProvider>
    </Fragment>
  );
};

export default LibraryPage;
