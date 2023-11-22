import React from "react";
import { Text } from "@chakra-ui/react";
export default function Title() {
  return (
    <Text
      zIndex={"-1"}
      transition="transform, 0.3s ease-in-out"
      className="animate__animated animate__fadeInDown animate__slower animate__delay-500ms"
      mb={{
        xsm: "0px",
        sm: "30px",
      }}
      fontSize={{
        base: "0px",

        xsm: "0px",
        sm: "60px",
        md: "70px",
        lg: "90px",
        xl: "110px",
        xxl: "140px",
        xxxl: "140px",
      }}
      fontWeight={"700"}
      color={"white"}
      filter={"drop-shadow(0px 0px 100px #000)"}
    >
      Invest with no stress.
    </Text>
  );
}
