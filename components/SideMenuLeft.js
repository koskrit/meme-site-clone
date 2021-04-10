import { Heading, List, ListIcon, ListItem } from "@chakra-ui/layout";
import React from "react";
import { MdCheckCircle, MdSettings } from "@chakra-ui/react";

function SideMenuLeft() {
   return (
      <>
         <List spacing={3} color="black">
            <Heading as="h6" size="sm" pt="3" color="gray.500" marginLeft="22px">
               9GAG
            </Heading>

            <ListItem>
               <ListIcon
                  fontSize="15.1px"
                  marginLeft="22px"
                  as={MdCheckCircle}
                  color="green.500"
               />
               Lorem ipsum
            </ListItem>
            <ListItem>
               <ListIcon
                  fontSize="15.1px"
                  marginLeft="22px"
                  as={MdCheckCircle}
                  color="green.500"
               />
               Assumenda, quia
            </ListItem>
            <ListItem>
               <ListIcon
                  fontSize="15.1px"
                  marginLeft="22px"
                  as={MdCheckCircle}
                  color="green.500"
               />
               Quidem, ipsam
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
               <ListIcon
                  fontSize="15.1px"
                  marginLeft="22px"
                  as={MdSettings}
                  color="green.500"
               />
               Quidem, ipsam
            </ListItem>
         </List>
      </>
   );
}

export default SideMenuLeft;
