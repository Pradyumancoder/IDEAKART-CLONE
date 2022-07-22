import { Box, ButtonGroup, ChakraProvider, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
function Bill(){
    return(
        <ChakraProvider>
         <div >
            <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            <Heading size='md'>Chakra App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
            <Heading size="md">Sign Up</Heading>
            <Heading size="md">Log in</Heading>
            </ButtonGroup>
            </Flex>
         </div>

        </ChakraProvider>
    )

}
export default Bill