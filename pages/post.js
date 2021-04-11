import React from "react";
import Layout from "../components/Layout";
import {useRouter} from "next/router"
import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, Text } from "@chakra-ui/layout";

function Post(props) {
   const params = useRouter()
   let {id,title} = params.query
   console.log(title,"title");
   console.log(`https://img-9gag-fun.9cache.com/photo/${id}_700bwp.webp`)
   return <Layout>
      <Box textAlign ="left" color="InfoText" pt = "5" >
      <Heading size="lg" mb="5">{title} </Heading>
      <Image w="600px" src = {`https://img-9gag-fun.9cache.com/photo/${id}_700bwp.webp`}/>
      </Box>
   </Layout>;
}

export default Post;
