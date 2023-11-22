import React from "react";
import { HStack, Flex } from "@chakra-ui/react";
import { wrap } from "framer-motion";
import { NavLink } from "react-router-dom";

import Title from "./components/Title";

import FlexBoxes from "./components/FlexBoxes";

import LoginButtton from "./components/LoginButtton";
export default function Services() {
  return (
    <>
      <HStack justifyContent={"center"}>
        <Title />
      </HStack>

      <Flex
        className="animate__animated animate__fadeInUp animate__slower animate__delay-500ms"
        flexDirection={"row"}
        justifyContent={"center"}
        gap={{
          base: "10px",
          xsm: "10px",
          sm: "10px",
          md: "10px",
          lg: "20px",
          xl: "30px",
          xxl: "50px",
          xxxl: "50px",
        }}
        mt={"20px"}
        wrap={{
          base: "wrap",
          xsm: "wrap",
          sm: "wrap",
          md: "wrap",
          lg: "wrap",
          xl: "nowrap",
          xxl: "nowrap",
          xxxl: "nowrap",
        }}
        padding={"0px 50px 0px 50px"}
      >
        <FlexBoxes />
      </Flex>

      <HStack justifyContent={"center"} mt={"20px"}>
        <LoginButtton />
      </HStack>
    </>
  );
}
