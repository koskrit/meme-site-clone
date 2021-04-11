import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, Link } from '@chakra-ui/layout'
import { chakra,useColorModeValue } from '@chakra-ui/system'
import React from 'react'

function SideCard({data}) {
    return (
        <>
        <Link shadow = "md">
         <Box
          w="full"
          height ="100px"
          bgSize="cover"
          style={{
            backgroundImage:
              `url(${data.imageURL})`,
          }}
        ></Box>

        <Box w="full" p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="medium"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            {data.title}
          </chakra.h1>
        </Box>
        </Link>   
        </>
    )
}

export default SideCard
