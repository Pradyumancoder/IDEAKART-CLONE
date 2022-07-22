import { ChakraProvider, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
function About(){
    return(
       <ChakraProvider>
        

        <div style={{inlineSize:"800px",marginInline:"auto",fontFamily:"medium-content-serif-font-Georgia, Cambria,serif",
        fontSize:"18px",fontWeight:"400",lineHeight:"28px",color:"#333333"}}>
        <Stack spacing={5}>
<Text>
  Ideakart is a site that gives u an idea about the book you want
   to buy. We offer a huge collection of books in diverse categories.
</Text>
<Text >
We have a user friendly search engine and a quick delivery system. 
With this we even provide best discounts on our books. You can write
 to us for any idea or any help you need.
</Text>
<Text >
Ideakart is a site that gives u an idea and a platform for the book 
you want. We offer a huge collection of books in diverse categories.
</Text>
<Text>
We have a user friendly search engine and a quick delivery system.
 With this we even provide best discounts on our books.
  You can write to us for any idea or any help you need.


</Text>
</Stack>
        </div>
        
       </ChakraProvider>
    )
}
export default About