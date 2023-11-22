import React from 'react'
import {
    
    Text,
    
  } from "@chakra-ui/react";
export default function Paragraph() {
  return (
    <Text
    transition="transform, 0.3s ease-in-out"
    className="animate__animated animate__slideInLeft animate__slower animate__delay-500ms"
    fontSize={{
      base: "20px",
      sm: "18px",
      md: "20px",
      lg: "25px",
      xl: "25px",
      xxl: "30px",
      xxxl: "30px",
    }}
    ml={{ xsm: "30px", sm: "50px" }}
    mt={"2%"}
    color="white"
  >
    Trade without constraints - enjoy commission-free buying and selling,
    so you keep more of your profits.
  </Text>
  )
}
