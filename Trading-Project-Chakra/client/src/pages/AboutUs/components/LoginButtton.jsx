import React from 'react'
import {
   
    Button,
   
  } from "@chakra-ui/react";
  import { NavLink } from "react-router-dom"
export default function LoginButtton() {
  return (
    <div><NavLink to="Login/Signup">
      <Button  
      fontWeight={"bolder"}
      boxShadow={"0 0 15px 1px #FF3131"} className="animate__animated animate__fadeIn animate__delay-2s"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.2)" }}
           bgImage={"linear-gradient(to right, #FF3131, #FF914D)"}
    padding={{
      base: "35px",
      xsm: "25",
      sm: "35",
      md: "35",
      lg: "35",
      xl: "35",
      xxl: "35",
      xxxl: "35",
    }}
    fontSize={{
      base: "35px",
      xsm: "25",
      sm: "35",
      md: "35",
      lg: "35",
      xl: "35",
      xxl: "35",
      xxxl: "35",
    }}
            color={"white"}
            mt={{
              base: "0",
              xsm: "0",
              sm: "0",
              md: "0",
              lg: "0",
              xl: "25",
              xxl: "25",
              xxxl: "25",
            }}
            
          >
            Login/Signup
          </Button>

             </NavLink>
</div>
  )
}
