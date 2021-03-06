import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Text,
} from "@chakra-ui/react";
import {SiDatadog} from "react-icons/si"

const Card= ({title,content,upVoteCount,data,url}) => {
  
  let section = data.sectionUrl.split('.com/')[1].split('/')[0]
  let postIdArray = data.url.split('/');
  let id = postIdArray[postIdArray.length-1]
  return (
    <Link href={"/post" + "?id=" + id + "&title=" + title }>
    <>
    <Flex
   
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
        w="full"
      >
        <Image
          roundedTop="lg"
          w="full"
          h="auto"
          fit="cover"
          src={content}
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              Product
            </chakra.span>
            <Text
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              href={url}
            >
              {title}
            </Text>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
              w="full"
            >
            </chakra.p>
          </Box>
          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <SiDatadog color ="gray" />
                <Text
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}
                  href="#"
                >
                  
                </Text>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="lg"
                color="black"
              >
                {section}
              </chakra.span>


              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
                float="right"
              >
                {data.upVoteCount +" Likes"}
              </chakra.span>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
                float="right"
              >
                {data.commentsCount +" Comments"}
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
    </>
    </Link>
  );
};

export default Card;