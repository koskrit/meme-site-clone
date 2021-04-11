import { List } from '@chakra-ui/layout'
import React,{useEffect,useState} from 'react'
import SideCard from "./SideCard"

function SideMenuRight() {
    const [posts,setPosts] = useState([])
    useEffect(async () => {
    try {
        let raw = await fetch("http://localhost:3000/api/featured")
        let data = await raw.json()
        data =JSON.parse(data.body)
        setPosts(data.data.items.splice(10,18))
        // console.log(data)

    } catch (error) {
        console.log(error)
    }

    },[])

    return (
        <>
        <List spacing={3} color="black" mt="5">
            {posts.map(post => <SideCard key ={post.itemId}  data ={post}/>)}
        </List>
            
        </>
    )
}

export default SideMenuRight
