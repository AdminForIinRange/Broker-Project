import { Outlet } from "react-router-dom";
import { Grid, GridItem, Image } from "@chakra-ui/react";
// components
import Navbar from "../components/Navbar.jsx";

import CentricLogo from "../img/CentricLogo.png";
export default function RootLayout() {
  return (
    <div className="Layout">
      <Grid
        templateColumns={"repeat(10, 1fr) "}
        gridTemplate={"repeat(10, 1fr)"}
      >
        <GridItem
          gridColumn={{
            base: "2/10",
            sm: "2/10",
            md: "2/10",
            lg: "2/10",
            xl: "2/10",
          }}
         
        >
           <Navbar />

            

        </GridItem>

        <GridItem 
          gridRow={{
            base: "1/1",
            sm: "1/1",
            md: "1/1",
            lg: "1/1",
            xl: "1/1",
          }}
         
        >
          <Image objectFit={"cover"} filter={"drop-shadow(1px 0px 5px #000)"}   transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.2)"}}   src={CentricLogo} w="100px" minW={"70px"}  mt={"20px"}   ml={"10%"}/>

        </GridItem>

       
      </Grid>
     
      <Outlet />
    </div>
  );
}
