import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  ButtonGroup,
  HStack,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  AbsoluteCenter,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  useBreakpointValue,
  TableCaption,
  TableContainer,
  VStack,
  Input,
  Wrap,
  InputGroup,
  InputLeftElement,
  Badge,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Spacer,
} from "@chakra-ui/react";

import {
  LineChart,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  UpDownIcon,
  SearchIcon,
  ArrowDownIcon,
  AddIcon,
} from "@chakra-ui/icons";

import GoldBar from "../../img/GoldBar.png";

import { useState } from "react";
export default function WatchList() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const renderLineChart = (
    <Wrap
      display={"flex"}
      justifyContent={"center"}
      padding={"0px"}
      mt={"10px"}
      filter={"drop-shadow(0px 0px 10px purple)"}
    >
      <div>
        <AreaChart width={275} height={70} data={data} padding={0}>
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </Wrap>
  );

  const renderLineChartSmall = (
    <Wrap
      display={"flex"}
      justifyContent={"center"}
      padding={"0px"}
      mt={"10px"}
      filter={"drop-shadow(0px 0px 10px purple)"}
    >
      <div>
        <AreaChart width={150} height={70} data={data} padding={0}>
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </Wrap>
  );

  const [selectedValue, setSelectedValue] = useState("Daily");

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const [selectedValueAsset, setSelectedValueAsset] = useState("All Assets");

  const handleSelectAssest = (value) => {
    setSelectedValueAsset(value);
  };

  const small = useBreakpointValue({ base: true, sm: false });
  return (
    <Box
      bg={"#202124"}
      h={"150vh"}
      mt={"15px"}
      borderTopLeftRadius={{
        base: "25px",
        xsm: "25px",
        sm: "25px",
        md: "25px",
        lg: "25px",
        xl: "35px",
        xxl: "35px",
        xxxl: "35px",
      }}
      borderTopRightRadius={{
        base: "25px",
        xsm: "25px",
        sm: "25px",
        md: "25px",
        lg: "25px",
        xl: "35px",
        xxl: "35px",
        xxxl: "35px",
      }}
    >
      {!small ? (
        <TableContainer color={"white"} padding={"25px"} w={"100%"}>
          <HStack gap={10} justifyContent={"center"} mr={"2%"}>
            <Button
              ml={"2%"}
              _hover={{ transform: "scale(1.2)" }}
              p={"22px"}
              colorScheme="whiteAlpha"
              bg={"rgba(22, 20, 20, 0.49)"}
            >
              <Text fontSize={"20px"}>Chart</Text>
            </Button>

            <Wrap w={"30.3%"}>
              <InputGroup color={"black"}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  type="tel"
                  placeholder="Search"
                  colorScheme="whiteAlpha"
                  variant="ghost"
                  color={{
                    base: "red",
                    xsm: "blue",
                    ssm: "orange",
                    sm: "green",
                    md: "purple",
                    lg: "gray",
                    xl: "yellow",
                    xxl: "pink",
                    xxxl: "black",
                  }}
                />
              </InputGroup>
            </Wrap>

            <Button
              _hover={{ transform: "scale(1.2)" }}
              boxShadow={"0 0 15px 1px green"}
              w={{
                xl: "13%",
                xxl: "12%",
                xxxl: "10%",
              }}
              p={"22px"}
              colorScheme="whatsapp"
              background={"linear-gradient(to right, green, #00BF63)"}
            >
              <Text fontSize={"20px"} align={"left"} mr={"15px"}>
                Buy:
              </Text>

              <Badge
                borderRadius={"5px"}
                fontSize={"20px"}
                p={"5px"}
                colorScheme="green"
              >
                $1925
              </Badge>
            </Button>
            <Button
              w={{
                lg: "gray",
                xl: "13%",
                xxl: "12%",
                xxxl: "10%",
              }}
              _hover={{ transform: "scale(1.2)" }}
              boxShadow={"0 0 15px 1px red"}
              colorScheme="red"
              background={"linear-gradient(to right, #FF3131, #FF914D)"}
            >
              <Text fontSize={"20px"} align={"left"} mr={"15px"}>
                Sell:
              </Text>

              <Badge
                borderRadius={"5px"}
                fontSize={"20px"}
                p={"5px"}
                colorScheme="red"
              >
                $1925
              </Badge>
            </Button>
          </HStack>

          {/* <Grid templateColumns={"repeat(12, 1fr) "} templateRows={"repeat(1, 1fr) "}  gridTemplate={"repeat(10, 1fr)"}>

<GridItem  gridColumn={{
          base: "1/3",
          xsm: "1/10",
          ssm:"1/2",
          sm: "1/2",
          md: "5/10 span",
          lg: "6/10 span",
          xl: "7/10 span",
          xxl: "8/10 span",
          xxxl: " 9/10 span ",
        }}

      
       >


<Wrap  >

<InputGroup  w={"100%"} color={"black"}>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon />
                    </InputLeftElement>
                    <Input
                      type="tel"
                      placeholder="Search"
                      colorScheme="whiteAlpha"
                      variant="ghost"
                      color={{
                        base: "red",
                        xsm: "blue",
                        ssm:"orange",
                        sm: "green",
                        md: "purple",
                        lg: "gray",
                        xl: "yellow",
                        xxl: "pink",
                        xxxl: "black",
                      }}
            
            
            
            
            
                    />
                  </InputGroup>


</Wrap>

</GridItem>


</Grid> */}

          <Table variant="simple" align="center">
            <Thead>
              <Tr>
                <Th textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Menu closeOnSelect={false}>
                    <MenuButton
                      as={Button}
                      colorScheme="whiteAlpha"
                      color={"white"}
                      variant="ghost"
                      bg={"rgba(22, 20, 20, 0.49)"}
                      minW={"80%"}
                    >
                      {selectedValueAsset} <UpDownIcon />
                    </MenuButton>

                    <MenuList
                      color={"white"}
                      minWidth="240px"
                      bg={"rgba(22, 20, 20, 1)"}
                      border={"none"}
                    >
                      <MenuOptionGroup
                        title=""
                        type="radio"
                        value={selectedValueAsset}
                        onChange={handleSelectAssest}
                        bg={"rgba(22, 20, 20, 1)"}
                      >
                        <MenuItemOption
                          value="Commodity"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Commodity
                        </MenuItemOption>
                        <MenuItemOption
                          value="Forex"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Forex
                        </MenuItemOption>
                        <MenuItemOption
                          value="Stocks"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Stocks
                        </MenuItemOption>
                        <MenuItemOption
                          value="Indices"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Indices
                        </MenuItemOption>
                        <MenuItemOption
                          value="Crypto"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Crypto
                        </MenuItemOption>
                        <MenuItemOption
                          value="All Assets"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          All Assets
                        </MenuItemOption>
                      </MenuOptionGroup>
                    </MenuList>
                  </Menu>
                </Th>
                <Th textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Button
                    minW={"80%"}
                    as={Button}
                    colorScheme="whiteAlpha"
                    color={"white"}
                    variant="ghost"
                    bg={"rgba(22, 20, 20, 0.49)"}
                  >
                    Price
                  </Button>
                </Th>
                <Th textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Menu closeOnSelect={false}>
                    <MenuButton
                      minW={"80%"}
                      as={Button}
                      colorScheme="whiteAlpha"
                      color={"white"}
                      variant="ghost"
                      bg={"rgba(22, 20, 20, 0.49)"}
                    >
                      {selectedValue} <UpDownIcon />
                    </MenuButton>
                    <MenuList
                      color={"white"}
                      minWidth="240px"
                      bg={"rgba(22, 20, 20, 1)"}
                      border={"none"}
                    >
                      <MenuOptionGroup
                        title=""
                        type="radio"
                        value={selectedValue}
                        onChange={handleSelect}
                        bg={"rgba(22, 20, 20, 1)"}
                      >
                        <MenuItemOption
                          value="Hourly"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Hourly
                        </MenuItemOption>
                        <MenuItemOption
                          value="Daily"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Daily
                        </MenuItemOption>
                        <MenuItemOption
                          value="Weekly"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Weekly
                        </MenuItemOption>
                        <MenuItemOption
                          value="Monthly"
                          bg={"rgba(22, 20, 20, 1)"}
                        >
                          Monthly
                        </MenuItemOption>
                      </MenuOptionGroup>
                    </MenuList>
                  </Menu>
                </Th>
                <Th textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Button
                    as={Button}
                    colorScheme="whiteAlpha"
                    color={"white"}
                    variant="ghost"
                    bg={"rgba(22, 20, 20, 0.49)"}
                    minW={"80%"}
                  >
                    Chart
                  </Button>
                </Th>
                <Th textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Button
                    as={Button}
                    colorScheme="whiteAlpha"
                    color={"white"}
                    variant="ghost"
                    bg={"rgba(22, 20, 20, 0.49)"}
                    minW={"80%"}
                  >
                    Entries
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody textAlign={"center"}>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"} mr={"20px"}>
                    <Image src={GoldBar} w={"60px"} />
                    <VStack>
                      <Text fontSize={"25px"} fontWeight={"500"}>
                        Gold
                        <Text fontSize={"20px"} fontWeight={"100"}>
                          xauusd
                        </Text>
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  {" "}
                  <Text
                    fontWeight={"500"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                  >
                    $1999
                  </Text>
                </Td>{" "}
                {/* Insert actual price */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Text
                    fontWeight={"400"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"red"}
                    textShadow={"0px 0px 10px red"}
                  >
                    -1.2%
                  </Text>
                </Td>{" "}
                {/* Insert actual 1-week change */}
                <Td textAlign={"end"} padding={"16px 0px 16px 0px"} p={"0px"}>
                  {" "}
                  {renderLineChart}
                </Td>{" "}
                {/* Insert chart or relevant data */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={{
                        base: "100px",
                        xsm: "100px",
                        ssm: "100px",
                        sm: "100px",
                        md: "100px",
                        lg: "100%",
                        xl: "100%",
                        xxl: "60%",
                        xxxl: "60%",
                      }}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}></Td>{" "}
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"} mr={"20px"}>
                    <Image src={GoldBar} w={"60px"} />
                    <VStack>
                      <Text fontSize={"25px"} fontWeight={"500"}>
                        Gold
                        <Text fontSize={"20px"} fontWeight={"100"}>
                          xauusd
                        </Text>
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  {" "}
                  <Text
                    fontWeight={"500"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                  >
                    $1999
                  </Text>
                </Td>{" "}
                {/* Insert actual price */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Text
                    fontWeight={"400"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"red"}
                    textShadow={"0px 0px 10px red"}
                  >
                    -1.2%
                  </Text>
                </Td>{" "}
                {/* Insert actual 1-week change */}
                <Td
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                  w={"0px"}
                >
                  {" "}
                  {renderLineChart}
                </Td>{" "}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={{
                        base: "100px",
                        xsm: "100px",
                        ssm: "100px",
                        sm: "100px",
                        md: "100px",
                        lg: "100%",
                        xl: "100%",
                        xxl: "60%",
                        xxxl: "60%",
                      }}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}></Td>{" "}
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"} mr={"20px"}>
                    <Image src={GoldBar} w={"60px"} />
                    <VStack>
                      <Text fontSize={"25px"} fontWeight={"500"}>
                        Gold
                        <Text fontSize={"20px"} fontWeight={"100"}>
                          xauusd
                        </Text>
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  {" "}
                  <Text
                    fontWeight={"500"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                  >
                    $1999
                  </Text>
                </Td>{" "}
                {/* Insert actual price */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Text
                    fontWeight={"400"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"red"}
                    textShadow={"0px 0px 10px red"}
                  >
                    -1.2%
                  </Text>
                </Td>{" "}
                {/* Insert actual 1-week change */}
                <Td
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                  w={"0px"}
                >
                  {" "}
                  {renderLineChart}
                </Td>{" "}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={{
                        base: "100px",
                        xsm: "100px",
                        ssm: "100px",
                        sm: "100px",
                        md: "100px",
                        lg: "100%",
                        xl: "100%",
                        xxl: "60%",
                        xxxl: "60%",
                      }}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}></Td>{" "}
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"} mr={"20px"}>
                    <Image src={GoldBar} w={"60px"} />
                    <VStack>
                      <Text fontSize={"25px"} fontWeight={"500"}>
                        Gold
                        <Text fontSize={"20px"} fontWeight={"100"}>
                          xauusd
                        </Text>
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  {" "}
                  <Text
                    fontWeight={"500"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                  >
                    $1999
                  </Text>
                </Td>{" "}
                {/* Insert actual price */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Text
                    fontWeight={"400"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"red"}
                    textShadow={"0px 0px 10px red"}
                  >
                    -1.2%
                  </Text>
                </Td>{" "}
                {/* Insert actual 1-week change */}
                <Td
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                  w={"0px"}
                >
                  {" "}
                  {renderLineChart}
                </Td>{" "}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={{
                        base: "100px",
                        xsm: "100px",
                        ssm: "100px",
                        sm: "100px",
                        md: "100px",
                        lg: "100%",
                        xl: "100%",
                        xxl: "60%",
                        xxxl: "60%",
                      }}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}></Td>{" "}
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"} mr={"20px"}>
                    <Image src={GoldBar} w={"60px"} />
                    <VStack>
                      <Text fontSize={"25px"} fontWeight={"500"}>
                        Gold
                        <Text fontSize={"20px"} fontWeight={"100"}>
                          xauusd
                        </Text>
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  {" "}
                  <Text
                    fontWeight={"500"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                  >
                    $1999
                  </Text>
                </Td>{" "}
                {/* Insert actual price */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Text
                    fontWeight={"400"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"red"}
                    textShadow={"0px 0px 10px red"}
                  >
                    -1.2%
                  </Text>
                </Td>{" "}
                {/* Insert actual 1-week change */}
                <Td
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                  w={"0px"}
                >
                  {" "}
                  {renderLineChart}
                </Td>{" "}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={{
                        base: "100px",
                        xsm: "100px",
                        ssm: "100px",
                        sm: "100px",
                        md: "100px",
                        lg: "100%",
                        xl: "100%",
                        xxl: "60%",
                        xxxl: "60%",
                      }}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}></Td>{" "}
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"} mr={"20px"}>
                    <Image src={GoldBar} w={"60px"} />
                    <VStack>
                      <Text fontSize={"25px"} fontWeight={"500"}>
                        Gold
                        <Text fontSize={"20px"} fontWeight={"100"}>
                          xauusd
                        </Text>
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  {" "}
                  <Text
                    fontWeight={"500"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                  >
                    $1999
                  </Text>
                </Td>{" "}
                {/* Insert actual price */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Text
                    fontWeight={"400"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"red"}
                    textShadow={"0px 0px 10px red"}
                  >
                    -1.2%
                  </Text>
                </Td>{" "}
                {/* Insert actual 1-week change */}
                <Td
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                  w={"0px"}
                >
                  {" "}
                  {renderLineChart}
                </Td>{" "}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={{
                        base: "100px",
                        xsm: "100px",
                        ssm: "100px",
                        sm: "100px",
                        md: "100px",
                        lg: "100%",
                        xl: "100%",
                        xxl: "60%",
                        xxxl: "60%",
                      }}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}></Td>{" "}
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"} mr={"20px"}>
                    <Image src={GoldBar} w={"60px"} />
                    <VStack>
                      <Text fontSize={"25px"} fontWeight={"500"}>
                        Gold
                        <Text fontSize={"20px"} fontWeight={"100"}>
                          xauusd
                        </Text>
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  {" "}
                  <Text
                    fontWeight={"500"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                  >
                    $1999
                  </Text>
                </Td>{" "}
                {/* Insert actual price */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Text
                    fontWeight={"400"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"red"}
                    textShadow={"0px 0px 10px red"}
                  >
                    -1.2%
                  </Text>
                </Td>{" "}
                {/* Insert actual 1-week change */}
                <Td
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                  w={"0px"}
                >
                  {" "}
                  {renderLineChart}
                </Td>{" "}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={{
                        base: "100px",
                        xsm: "100px",
                        ssm: "100px",
                        sm: "100px",
                        md: "100px",
                        lg: "100%",
                        xl: "100%",
                        xxl: "60%",
                        xxxl: "60%",
                      }}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}></Td>{" "}
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"} mr={"20px"}>
                    <Image src={GoldBar} w={"60px"} objectFit={"cover"} />
                    <VStack>
                      <Text fontSize={"25px"} fontWeight={"500"}>
                        Gold
                        <Text fontSize={"20px"} fontWeight={"100"}>
                          xauusd
                        </Text>
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  {" "}
                  <Text
                    fontWeight={"500"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                  >
                    $1999
                  </Text>
                </Td>{" "}
                {/* Insert actual price */}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <Text
                    fontWeight={"400"}
                    fontSize={{
                      base: "20px",
                      xsm: "20px",
                      ssm: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"red"}
                    textShadow={"0px 0px 10px red"}
                  >
                    -1.2%
                  </Text>
                </Td>{" "}
                {/* Insert actual 1-week change */}
                <Td
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                  w={"0px"}
                >
                  {" "}
                  {renderLineChart}
                </Td>{" "}
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={{
                        base: "100px",
                        xsm: "100px",
                        ssm: "100px",
                        sm: "100px",
                        md: "100px",
                        lg: "100%",
                        xl: "100%",
                        xxl: "60%",
                        xxxl: "60%",
                      }}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}></Td>{" "}
                {/* Insert sell action */}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer color={"white"} padding={"5px"} pt={"10px"}>
          <HStack mt={"10px"} gap={2} justifyContent={"center"} mr={"2%"}>
            <Button
              ml={"2%"}
              _hover={{ transform: "scale(1.2)" }}
              p={"22px"}
              colorScheme="whiteAlpha"
              bg={"rgba(22, 20, 20, 0.49)"}
            >
              <Text fontSize={"20px"}><UpDownIcon /></Text>
            </Button>

            <Wrap w={{ base: "auto", xsm: "auto", ssm: "30.3%", sm: "30.3%" }}>
              <InputGroup color={"black"}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  type="tel"
                  placeholder="Search"
                  colorScheme="whiteAlpha"
                  variant="ghost"
                  color={{
                    base: "red",
                    xsm: "blue",
                    ssm: "orange",
                    sm: "green",
                    md: "purple",
                    lg: "gray",
                    xl: "yellow",
                    xxl: "pink",
                    xxxl: "black",
                  }}
                />
              </InputGroup>
            </Wrap>

            <Button
              display={{
                base: "none",
                xsm: "none",
                ssm: "flex",
                sm: "flex",
              }}
              _hover={{ transform: "scale(1.2)" }}
              boxShadow={"0 0 15px 1px green"}
              w={{
                xl: "13%",
                xxl: "12%",
                xxxl: "10%",
              }}
              p={"22px"}
              colorScheme="whatsapp"
              background={"linear-gradient(to right, green, #00BF63)"}
            >
              <Text fontSize={"20px"} align={"left"} mr={"15px"}>
                Buy:
              </Text>

              <Badge
                borderRadius={"5px"}
                fontSize={"20px"}
                p={"5px"}
                colorScheme="green"
              >
                $1925
              </Badge>
            </Button>
            <Button
              display={{
                base: "none",
                xsm: "none",
                ssm: "flex",
                sm: "flex",
              }}
              w={{
                xl: "13%",
                xxl: "12%",
                xxxl: "10%",
              }}
              _hover={{ transform: "scale(1.2)" }}
              boxShadow={"0 0 15px 1px red"}
              colorScheme="red"
              background={"linear-gradient(to right, #FF3131, #FF914D)"}
            >
              <Text fontSize={"20px"} align={"left"} mr={"15px"}>
                Sell:
              </Text>

              <Badge
                borderRadius={"5px"}
                fontSize={"20px"}
                p={"5px"}
                colorScheme="red"
              >
                $1925
              </Badge>
            </Button>
          </HStack>
          <Table pt={"0px"} variant="simple">
            <Thead>
              <Tr>
                <Th
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  textAlign={"center"}
                ></Th>

                <Th textAlign={"center"}></Th>
                <Th textAlign={"center"}></Th>
              </Tr>
            </Thead>
            <Tbody textAlign={"center"}>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack pr={"0px"}>
                    <Image src={GoldBar} w={"60px"} />

                    <VStack justifyItems={"center"}>
                      <Text fontSize={"30px"} fontWeight={"500"}>
                        Gold
                      </Text>
                      <Text
                        fontWeight={"400"}
                        fontSize={{
                          base: "20px",
                          xsm: "20px",
                          ssm: "20px",
                          sm: "20px",
                          md: "20px",
                          lg: "25px",
                        }}
                      >
                        1999
                      </Text>
                      <Text color={"red"} textShadow={"0px 0px 10px red"}>
                        -1.2%
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                >
                  {" "}
                  {renderLineChartSmall}
                </Td>
                <Td
                  display={{
                    base: "table-cell",
                    xsm: "table-cell",
                    ssm: "none",
                    sm: "none",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px green"}
                    w={"110px"}
                    mr={"15px"}
                    colorScheme="whatsapp"
                    background={"linear-gradient(to right, green, #00BF63)"}
                  >
                    Buy:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="green"
                    >
                      $1925
                    </Badge>
                  </Button>
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px red"}
                    w={"100px"}
                    colorScheme="red"
                    background={"linear-gradient(to right, #FF3131, #FF914D)"}
                  >
                    {" "}
                    Sell:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="red"
                    >
                      $1925
                    </Badge>
                  </Button>
                </Td>{" "}
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={"100px"}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack pr={"0px"}>
                    <Image src={GoldBar} w={"60px"} />

                    <VStack justifyItems={"center"}>
                      <Text fontSize={"30px"} fontWeight={"500"}>
                        Gold
                      </Text>
                      <Text
                        fontWeight={"400"}
                        fontSize={{
                          base: "20px",
                          xsm: "20px",
                          ssm: "20px",
                          sm: "20px",
                          md: "20px",
                          lg: "25px",
                        }}
                      >
                        1999
                      </Text>
                      <Text color={"red"} textShadow={"0px 0px 10px red"}>
                        -1.2%
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                >
                  {" "}
                  {renderLineChartSmall}
                </Td>
                <Td
                  display={{
                    base: "table-cell",
                    xsm: "table-cell",
                    ssm: "none",
                    sm: "none",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px green"}
                    w={"110px"}
                    mr={"15px"}
                    colorScheme="whatsapp"
                    background={"linear-gradient(to right, green, #00BF63)"}
                  >
                    Buy:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="green"
                    >
                      $1925
                    </Badge>
                  </Button>
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px red"}
                    w={"100px"}
                    colorScheme="red"
                    background={"linear-gradient(to right, #FF3131, #FF914D)"}
                  >
                    {" "}
                    Sell:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="red"
                    >
                      $1925
                    </Badge>
                  </Button>
                </Td>
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={"100px"}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack pr={"0px"}>
                    <Image src={GoldBar} w={"60px"} />

                    <VStack justifyItems={"center"}>
                      <Text fontSize={"30px"} fontWeight={"500"}>
                        Gold
                      </Text>
                      <Text
                        fontWeight={"400"}
                        fontSize={{
                          base: "20px",
                          xsm: "20px",
                          ssm: "20px",
                          sm: "20px",
                          md: "20px",
                          lg: "25px",
                        }}
                      >
                        1999
                      </Text>
                      <Text color={"red"} textShadow={"0px 0px 10px red"}>
                        -1.2%
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                >
                  {" "}
                  {renderLineChartSmall}
                </Td>
                <Td
                  display={{
                    base: "table-cell",
                    xsm: "table-cell",
                    ssm: "none",
                    sm: "none",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px green"}
                    w={"110px"}
                    mr={"15px"}
                    colorScheme="whatsapp"
                    background={"linear-gradient(to right, green, #00BF63)"}
                  >
                    Buy:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="green"
                    >
                      $1925
                    </Badge>
                  </Button>
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px red"}
                    w={"100px"}
                    colorScheme="red"
                    background={"linear-gradient(to right, #FF3131, #FF914D)"}
                  >
                    {" "}
                    Sell:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="red"
                    >
                      $1925
                    </Badge>
                  </Button>
                </Td>{" "}
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"5px"}
                      w={"100px"}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack pr={"0px"}>
                    <Image src={GoldBar} w={"60px"} />

                    <VStack justifyItems={"center"}>
                      <Text fontSize={"30px"} fontWeight={"500"}>
                        Gold
                      </Text>
                      <Text
                        fontWeight={"400"}
                        fontSize={{
                          base: "20px",
                          xsm: "20px",
                          ssm: "20px",
                          sm: "20px",
                          md: "20px",
                          lg: "25px",
                        }}
                      >
                        1999
                      </Text>
                      <Text color={"red"} textShadow={"0px 0px 10px red"}>
                        -1.2%
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                >
                  {" "}
                  {renderLineChartSmall}
                </Td>
                <Td
                  display={{
                    base: "table-cell",
                    xsm: "table-cell",
                    ssm: "none",
                    sm: "none",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px green"}
                    w={"110px"}
                    mr={"15px"}
                    colorScheme="whatsapp"
                    background={"linear-gradient(to right, green, #00BF63)"}
                  >
                    Buy:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="green"
                    >
                      $1925
                    </Badge>
                  </Button>
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px red"}
                    w={"100px"}
                    colorScheme="red"
                    background={"linear-gradient(to right, #FF3131, #FF914D)"}
                  >
                    {" "}
                    Sell:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="red"
                    >
                      $1925
                    </Badge>
                  </Button>
                </Td>{" "}
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={"100px"}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                {/* Insert colorScheme='whatsapp' background={"linear-gradient(to right, green, #00BF63)"} buy action */}
                {/* Insert sell action */}
              </Tr>
              <Tr>
                <Td textAlign={"center"} padding={"16px 0px 16px 0px"}>
                  <HStack pr={"0px"}>
                    <Image src={GoldBar} w={"60px"} />

                    <VStack justifyItems={"center"}>
                      <Text fontSize={"30px"} fontWeight={"500"}>
                        Gold
                      </Text>
                      <Text
                        fontWeight={"400"}
                        fontSize={{
                          base: "20px",
                          xsm: "20px",
                          ssm: "20px",
                          sm: "20px",
                          md: "20px",
                          lg: "25px",
                        }}
                      >
                        1999
                      </Text>
                      <Text color={"red"} textShadow={"0px 0px 10px red"}>
                        -1.2%
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  padding={"16px 0px 16px 0px"}
                  p={"0px"}
                >
                  {" "}
                  {renderLineChartSmall}
                </Td>
                <Td
                  display={{
                    base: "table-cell",
                    xsm: "table-cell",
                    ssm: "none",
                    sm: "none",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px green"}
                    w={"110px"}
                    mr={"15px"}
                    colorScheme="whatsapp"
                    background={"linear-gradient(to right, green, #00BF63)"}
                  >
                    Buy:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="green"
                    >
                      $1925
                    </Badge>
                  </Button>
                  <Button
                    _hover={{ transform: "scale(1.2)" }}
                    boxShadow={"0 0 15px 1px red"}
                    w={"100px"}
                    colorScheme="red"
                    background={"linear-gradient(to right, #FF3131, #FF914D)"}
                  >
                    {" "}
                    Sell:
                    <Badge
                      ml={"10px"}
                      borderRadius={"5px"}
                      fontSize={"15px"}
                      p={"5px"}
                      colorScheme="red"
                    >
                      $1925
                    </Badge>
                  </Button>
                </Td>{" "}
                <Td
                  display={{
                    base: "none",
                    xsm: "none",
                    ssm: "table-cell",
                    sm: "table-cell",
                  }}
                  textAlign={"center"}
                  padding={"16px 0px 16px 0px"}
                >
                  <HStack justifyContent={"center"}>
                    <Text>
                      <Badge colorScheme="green">80%</Badge>
                    </Text>
                    <Progress
                      value={80}
                      borderRadius={"4px"}
                      w={"100px"}
                      colorScheme="green"
                      bg={"red"}
                    />
                    <Text>
                      <Badge colorScheme="red">20%</Badge>
                    </Text>
                  </HStack>
                </Td>
                {/* Insert sell action */}
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>{/* Footer if needed */}</Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
