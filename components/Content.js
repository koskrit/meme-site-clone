import { Stack } from '@chakra-ui/layout'
import React,{useEffect,useState} from 'react'
import Card  from "../components/Card"

function Content() {

  let [posts,setPosts] = useState([])

  useEffect(async () => {
    const result = await fetch(
      'http://localhost:3000/api/9gagboards',
    );
    const items = await result.json()
    
    setPosts(JSON.parse(items.data).data.items);
   
  },[]);

    return (
        <>
          <Stack spacing={6}>
            {posts.map(item => <Card key={item.id} data={item} likes = {item.likes} title = {item.title} content = {item.imageURL}/>)}
              </Stack>  
        </>
    )
}

export default Content
