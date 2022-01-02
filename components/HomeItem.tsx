import { Card, Title, Text } from "@mantine/core";
import { Image } from "@mantine/core";
import { useState } from "react";

const HomeItem = (props: any) => {
  const [bgColor, setBgColor] = useState("rgba(37,38,43, 0.5)");

  return (
    <Card
      style={{
        // width: "13%",
        display: "flex",
        backgroundColor: bgColor,
        alignItems: "center",
        maxHeight: "400px",
        gap: "2%",
        cursor: "pointer",
        justifyContent: "center",
        padding: "5% 1%",
        flexDirection: "column",
      }}
      onMouseEnter={() => {
        setBgColor("rgba(59, 59, 59, 0.5)");
      }}
      onMouseLeave={() => {
        setBgColor("rgba(37,38,43, 0.5)");
      }}
    >
      <Image height={150} width={150} src={props.link}></Image>

      <Title order={5}>Unpopular Opinions </Title>
      <Text style={{ color: "rgba(100,100, 100,1)" }}>🅴 Nov 2 • 32min</Text>
    </Card>
  );
};

export default HomeItem;
