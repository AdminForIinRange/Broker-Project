import React from 'react'
import {
 
    Button,
   
  } from "@chakra-ui/react";
export default function Buttons() {
  return (
    <>
    
   
    <Button
          

    boxShadow={"0 0 15px 1px #805ad5"}
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.2)" }}
      colorScheme="purple"
      w={"150px"}
      fontSize="20px"
    >
      Login/Signup
    </Button>
    <Button
     boxShadow={"0 0 15px 1px #0088cc"}
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.2)" }}
      colorScheme="telegram"
      w={"150px"}
      fontSize="20px"
    >
      Services
    </Button>

    </>
  )
}
