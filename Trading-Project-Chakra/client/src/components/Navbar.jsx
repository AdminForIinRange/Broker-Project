import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Box,
 
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  Wrap,

} from "@chakra-ui/react";
import { NavLink } from "react-router-dom"

import './Navbar.css'
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  return (

  <>





    <Flex 
      fontSize="xs"
      as="nav"
      flexDirection="row"
      justifyContent={isSmallScreen ? "right" : "Center"}
      alignItems="center"
mt={"10px"}
      p="10px"
     
     
    >




      <Box className="NavBar" bg={" rgba(0, 0, 0, 0.545)"}  w={"auto"} borderRadius="15px">
        <Flex  justifyContent="center" alignItems="center"  p="10px" gap={"25px"}>
          {isSmallScreen ? (
            <Menu>
              <MenuButton as={Button} colorScheme="whiteAlpha" color={"white"} variant='ghost'>
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Main</MenuItem>
                <MenuItem>AboutUs</MenuItem>
                <MenuItem>Watch List</MenuItem>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Settings</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Wrap className="NavBar"   >
             <NavLink to="/" > 
             <Button fontSize="sm" colorScheme="whiteAlpha"  color={"white"} variant='ghost' w="auto">
                Main
              </Button>

             </NavLink>
             <NavLink to="Services" >
             <Button fontSize="sm" colorScheme="whiteAlpha" color={"white"} variant='ghost' w="auto">
             Services
              </Button>

             </NavLink>
             <NavLink to="Login/Signup">
             <Button fontSize="sm" colorScheme="whiteAlpha" color={"white"} variant='ghost' w="auto">
             Login
              </Button>

             </NavLink>
             <NavLink to="WatchList">
             <Button fontSize="sm" colorScheme="whiteAlpha" color={"white"} variant='ghost' w="auto">
             WatchList
              </Button>

             </NavLink>
             <NavLink to="Dashboard">
             <Button fontSize="sm" colorScheme="whiteAlpha" color={"white"} variant='ghost' w="auto">
             Dashboard
              </Button>

             </NavLink>
             <NavLink to="Account">
             <Button fontSize="sm" colorScheme="whiteAlpha" color={"white"} variant='ghost' w="auto">
             Account
              </Button>

             </NavLink>



            </Wrap>
          )}
        </Flex>
      </Box>
    </Flex>
    </>
  );
}
