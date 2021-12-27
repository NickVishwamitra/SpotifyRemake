import {
  House,
  SpotifyLogo,
  MagnifyingGlass,
  Books,
  Plus,
  HeartStraight,
} from "phosphor-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Divider } from "@mantine/core";
import { useHover } from "@mantine/hooks";

const Navigation = (props: any) => {
  const router = useRouter();
  const { hovered, ref } = useHover();

  return (
    <nav
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "15%",
        minWidth: "250px",
        backgroundColor: "rgb(0,1,1)",
        position: "sticky",
        top: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: 900,
          padding: "0% 5% ",
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
        <SpotifyLogo size={50} style={{ marginRight: "2%" }} weight="fill" />
        <p style={{ textAlign: "center", fontSize: 25, fontWeight: 700 }}>
          Spotifake®️
        </p>
      </div>
      <Link href="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 900,
            cursor: "pointer",
            margin: "0% 5%",
            height: "5%",
            borderRadius: "5px",
            backgroundColor: props.selected == "home" ? "#292829" : "",
          }}
        >
          <House
            size={30}
            style={{ marginRight: "5%", marginLeft: "5%" }}
            weight={props.selected == "home" ? "fill" : "thin"}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: props.selected == "home" ? 700 : hovered ? 700 : 400,
            }}
          >
            Home
          </p>
        </div>
      </Link>

      <Link href="/search">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 900,
            margin: "0% 5%",
            cursor: "pointer",
            height: "5%",
            borderRadius: "5px",
            backgroundColor: props.selected == "search" ? "#292829" : "",
          }}
        >
          <MagnifyingGlass
            size={30}
            style={{
              marginRight: "5%",
              marginLeft: "5%",
            }}
            weight={props.selected == "search" ? "bold" : "thin"}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight:
                props.selected == "search" ? 700 : hovered ? 700 : 400,
            }}
          >
            Search
          </p>
        </div>
      </Link>
      <Link href="/library">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 900,
            margin: "0% 5% ",
            cursor: "pointer",
            height: "5%",
            borderRadius: "5px",
            backgroundColor: props.selected == "library" ? "#292829" : "",
            marginBottom: "10%",
          }}
        >
          <Books
            size={30}
            style={{ marginRight: "5%", marginLeft: "5%" }}
            weight={props.selected == "library" ? "bold" : "thin"}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: props.selected == "library" ? 700 : 400,
            }}
          >
            Your Library
          </p>
        </div>
      </Link>
      <Link href="/createplaylist">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 900,
            margin: "0% 5% ",
            cursor: "pointer",
            height: "5%",
            borderRadius: "5px",
          }}
        >
          <Plus
            size={30}
            style={{
              marginRight: "5%",
              marginLeft: "5%",
              padding: "2%",
              color: "black",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: 400,
            }}
          >
            Create Playlist
          </p>
        </div>
      </Link>
      <Link href="/createplaylist">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 900,
            margin: "0% 5% ",
            cursor: "pointer",
            height: "5%",
            borderRadius: "5px",
          }}
        >
          <HeartStraight
            weight="fill"
            size={30}
            style={{
              marginRight: "5%",
              marginLeft: "5%",
              padding: "2%",
              borderRadius: "5px",
              background:
                "linear-gradient(146deg, #05afe1 0%, rgba(43,182,115,1) 100%)",
            }}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: 400,
            }}
          >
            Liked Songs
          </p>
        </div>
      </Link>
      <div style={{ margin: "5%" }}>
        <Divider size="xs"></Divider>
      </div>
    </nav>
  );
};
export default Navigation;
