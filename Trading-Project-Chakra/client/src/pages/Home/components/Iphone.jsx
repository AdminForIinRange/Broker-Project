import React from 'react'
import {
   
    Image,
   
  } from "@chakra-ui/react";
  import  iphone from "../../../img/Trading Made simple-iphone.png";
export default function Iphone() {
  return (
    <Image 

    display={{base: "none" , xsm: "none", sm: "block", md: "block", lg: "block", xl: "block", xxl:"block"}}
  
      objectFit={"cover"}
      filter={"drop-shadow(1px 0px 30px #000)"}
      className="animate__animated animate__fadeInUp animate__slower "
      src={iphone}
      mt={"70px"}

      w={"450px"}
    />
  )
}
