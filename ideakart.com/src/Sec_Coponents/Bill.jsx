import { Box, Button, ButtonGroup, ChakraProvider, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import "./Bill.css"
function Bill(){
    return(
        <ChakraProvider >
        
            
         <Text textShadow='1px 1px #ff0000' m='6'>
         <div className="ele">

            <div>
                <h3>
                    Store
                </h3>
            </div>
            <div>
                <h3>
                    Price
                </h3>
            </div>
            <div>
                <h3>
                    Buy Now
                </h3>
            </div>
            </div>
            </Text>
          
         
         
         <div className="ele1">
            
            
            <div>
                <h3>
                Amazon, Paperback
                </h3>
            </div>
            <div>
                <h3>
                Rs. 865.0
                </h3>
            </div>
            <div>
                <a href="https://www.amazon.in/Intermittent-Fasting-Keto-Ketogenic-
                Beginners/dp/1950922901?SubscriptionId=AKIAIUO4VXYJFOFNWAEA&tag=
                httptopicerco-21&linkCode=xm2&camp=2025&
                creative=165953&creativeASIN=1950922901">
                <Button colorScheme='blue'>Buy Now</Button>
                </a>
           
            </div>
            
          
         </div>
        </ChakraProvider>
    )

}
export default Bill