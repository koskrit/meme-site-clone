import { Stack } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner';
import React,{useEffect,useState} from 'react'
import Card  from "../components/Card"

function Content() {

  let [posts,setPosts] = useState([])
  let [showSpinner,setShowSpinner] = useState(true)

  useEffect(async () => {
    const result = await fetch(
      'http://localhost:3000/api/9gagboards',
    );
    const items = await result.json()
    
    setPosts(JSON.parse(items.data).data.items);
    setShowSpinner(false)
   
  },[]);

    return (
        <>
          <Stack spacing={6} >
          {showSpinner ?<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="lg" ml = "45%" mt = "100px" /> : null}
            {posts.map(item => <Card url = {item.url} key={item.id} data={item} likes = {item.likes} title = {item.title} content = {item.imageURL}/>)}
              </Stack>  
        </>
    )
}

export default Content
