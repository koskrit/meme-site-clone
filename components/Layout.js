import { Text, Grid, Heading, WrapItem, Box, Flex } from "@chakra-ui/layout";
import React from "react";
import {
   IconButton,
   TabList,
   Tab,
   Tabs,
   Button,
   Icon,
   MdReceipt,
   SpinnerIcon,
   Avatar,
} from "@chakra-ui/react";
import { QuestionIcon, SearchIcon } from "@chakra-ui/icons";
import SideMenuLeft from "../components/SideMenuLeft"
import Content  from "../components/Content"
import SideMenuRight from "./SideMenuRight";

export default function Layout({ children }) {
   return (
      <>
         <Grid templateColumns="repeat(15, 1fr)" gap="1" shadow="md" position="fixed" backgroundColor="white" textAlign = "center">
            <IconButton
               aria-label="Search database"
               icon={<SearchIcon />}
               w="1"
               m="1"
               ml="4"
            />
            <Heading pt="2" as="h4" size="md">
               9gag
            </Heading>
            <Tabs>
               <TabList display = {["none","none","none","flex"]}>
                  <Tab>One</Tab>
                  <Tab>Two</Tab>
                  <Tab>Three</Tab>
                  <Tab>One</Tab>
                  <Tab>Two</Tab>
                  <Tab>Three</Tab>
                  <Tab>One</Tab>
                  <Tab>Two</Tab>
                  <Tab>Three</Tab>
                  <Tab>One</Tab>
                  <Tab>Two</Tab>
                  <Tab>Three</Tab>
                  <Button borderRadius="30px" h="10" w="10" ml="20">
                     <Icon as={MdReceipt} w={6} h={6} />
                  </Button>
                  <Button borderRadius="30px" h="10" w="10">
                     <Icon as={QuestionIcon} w={6} h={6} />
                  </Button>
                  <Button borderRadius="30px" h="10" w="10">
                     <Icon as={SpinnerIcon} w={6} h={6} />
                  </Button>
                  <WrapItem>
                     <Avatar
                        size="sm"
                        mt="1"
                        ml="2"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                     />
                  </WrapItem>
                  <Button colorScheme="blue" size="sm" ml="5" mt="1">
                     Upload
                  </Button>
               </TabList>
            </Tabs>
         </Grid>
         <Flex color="white" h="94.5vh" justifyContent="space-between" pt="12">
            <Box w={["0px","0px","300px","300px"]} h="94.5vh" position= "fixed" display={["none","none","block","block"]} >
               <SideMenuLeft />
            </Box>
            <Box  width="full" pl = {["10px","10px","150px","200px"]} pr={["10px","10px","250px","300px"]}>
               <Content/>
            </Box>
            <Box w={["0px","0px","250px","300px"]} position="fixed" right="0px" display={["none","none","block","block"]}  >
               <SideMenuRight/>
            </Box>
         </Flex>
      </>
   );
}
