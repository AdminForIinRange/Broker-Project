import React from 'react'
import {
    
    Text,
    
  } from "@chakra-ui/react";
export default function Header() {
  return (
    <Text transition="transform, 0.3s ease-in-out" 
    className="animate__animated animate__slideInLeft animate__slower animate__delay-500ms"
    fontSize={{
      base: "60px",
      xsm: "40px",
      sm: "40px",
      md: "50px",
      lg: "60px",
      xl: "70px",
      xxl:"80px"
    }}
    ml={{  xsm: "30px" ,  sm: "50px",}}
    mt={"12%"}
    color={
     "white"
      
    }
    fontWeight={"700"}
  >
    Begin Investing, Embrace a{" "}
    <span style={{ color: "#5271FF",  textShadow: '0px  0px 5px rgb(82, 113, 255)' }}> Stress-Free</span> calculated
    Journey.{" "}
  </Text>
  )
}
