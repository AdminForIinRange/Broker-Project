import {
  Grid,
  GridItem,
 
  ButtonGroup,
  
} from "@chakra-ui/react";

import Iphone from "./components/Iphone";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Paragraph from "./components/Paragraph";
export default function Main() {
  return (
    <Grid templateColumns={"repeat(10, 1fr) "} templateRows={"repeat(10, 1fr) "}  gridTemplate={"repeat(10, 1fr)"}>
      <GridItem
        gridColumn={{
          base: "1/3",
          xsm: "1/10",
          sm: "1/2",
          md: "1/4",
          lg: "1/6",
          xl: "1/7",
          xxl: "1/7",
        }}
        gridRow={{
          base: "1/1",
          xsm: "1/2",
          sm: "1/1",
          md: "1/1",
          lg: "1/1",
          xl: "1/1",
        }}
      >
        <Header />
      </GridItem>

      <GridItem
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
        gridColumn={{
          base: "3/10 span",
          xsm: "2/10 span",
          sm: "2/10 span",
          md: "4/10 span",
          lg: "6/10 span ",
          xl: "7/10 span",
        }}
        gridRow={{
          base: "1/3",
          xsm: "1/10 span",
          sm: "1/10",
          md: "1/4",
          lg: "1/10",
          xl: "1/10",
        }}
      >
        <Iphone />
      </GridItem>

      <GridItem
        gridColumn={{
          base: "1/3",
          xsm: "1/2",
          sm: "1/2",
          md: "1/4",
          lg: "1/5",
          xl: "1/5",
        }}
        gridRow={{
          base: "2/10",
          xsm: "2/10",
          sm: "2/10",
          md: "2/10",
          lg: "2/10",
          xl: "2/10",
        }}
      >
       <Paragraph />
      </GridItem>
      <GridItem
        gridColumn={{
          base: "1/1",
          xsm: "1/2",
          sm: "1/2",
          md: "1/1",
          lg: "1/1",
          xl: "1/1",
        }}
        gridRow={{
          base: "2/10",
          xsm: "2/10",
          sm: "2/10",
          md: "2/10",
          lg: "2/10",
          xl: "2/10",
          xxl: "2/10",
        }}
      >
        <ButtonGroup
          className="animate__animated animate__flipInX  "
          gap={"6"}
          ml={{
            base: "30px",
            xsm: "30px",
            sm: "30px",
            md: "50px",
            lg: "50px",
            xl: "50px",
            xxl: "50px",
          }}
          mt={"150px"}
          size="lg"
   
        >
          <Buttons />
        </ButtonGroup>
      </GridItem>


    </Grid>
  );
}
