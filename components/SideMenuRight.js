import { List } from '@chakra-ui/layout'
import React from 'react'
import SideCard from "./SideCard"

function SideMenuRight() {
    return (
        <>
        <List spacing={3} color="black">
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
        </List>
            
        </>
    )
}

export default SideMenuRight
