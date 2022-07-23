import { Badge, Button, ButtonGroup, Center, ChakraProvider, Divider, Flex, Heading, Image, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import { Box } from '@chakra-ui/react'
import {AiFillStar  } from "react-icons/ai"
import styles from "./Lasthome.module.css"
import Footer from "../components/Footer";
import Bill from "./Bill";
function Lasthome(){
    const property = {
        imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51mLwepYDOL.jpg',
        text:"Buy it at best price from here",
        price: 'Rs.815',
        button:"button",
        text1: 'write text here',
        h1_tag:"Boook Specifucation" ,
        
      }
    return(

        <ChakraProvider>
            <div className={styles.global_div}>
            <Flex>
                <Box p='4' bg='red.400'>
                   
    {/* ********************************************************************* */}
  
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <div style={{padding:"10px",marginLeft:"13px",border:"1px solid",width:"fit-content"}}><Image src={property.imageUrl}  /></div>
      

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {/* {property.text} &bull;{property.button}  */}
            {property.text}

          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.price} &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; <button style={{backgroundColor:"#EC971F"}}>Buy Now</button>
        </Box>

        <Box>
         <div style={{backgroundColor:"#9ACD32",color:"blue"}}>
        <a href="https://www.amazon.in/Intermittent-Fasting-Keto-Ketogenic-Beginners/dp/1950922901?SubscriptionId=AKIAIUO4VXYJFOFNWAEA&tag=httptopicerco-21&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1950922901">
        Get Instant Cashback when you pay using Amazon Pay... Click Here

        </a>
         </div>
        
        </Box>

        <Box display='flex'  alignItems='center'>
          
          <Box as='span' color='gray.600' fontSize='sm'>
            {property.h1_tag}
            
             <Flex minWidth='max-content' alignItems='center' gap='3'>
            <Box p='2'>
                <Heading size='md'>Binding</Heading>
               
            </Box>
            <Spacer />
            <ButtonGroup>
            <Heading size='md'>Paperback</Heading>
            
              
            </ButtonGroup>
            </Flex>
            
            <Flex minWidth='max-content' alignItems='center' gap='3'>
            <Box p="2">
                <Heading size='md'>Language</Heading>
               
            </Box>
            <Spacer />
            <ButtonGroup >
            <Heading size='md'>English</Heading>
            
              
            </ButtonGroup>
            </Flex>
             
            <Flex minWidth='max-content' alignItems='center' >
            <Box p='2'>
                <Heading size='md'>Number of Pages</Heading>
               
            </Box>
            <Spacer />
            <ButtonGroup >
            <Heading size='md'>214</Heading>
            
              
            </ButtonGroup>
            </Flex>

            <Flex minWidth='max-content' alignItems='center' gap='3'>
            <Box p='2'>
                <Heading size='md'>Author</Heading>
               
            </Box>
            <Spacer />
            <ButtonGroup >
            <Heading size='md'>Elizabeth Moore</Heading>
            
              
            </ButtonGroup>
            </Flex>


            <Flex minWidth='max-content' alignItems='center' gap='3'>
            <Box p='2'>
                <Heading size='md'>Publisher</Heading>
               
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
            <Heading size='md'>Bravex Publication</Heading>
            
              
            </ButtonGroup>
            </Flex>


            <Flex minWidth='max-content' alignItems='center' gap='10'>
            <Box p='2'>
                <Heading size='md'>Isbn-10</Heading>
               
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
            <Heading size='md'>183784783777</Heading>
            
              
            </ButtonGroup>
            </Flex>


            <Flex minWidth='max-content' alignItems='center' gap='10'>
            <Box p='2'>
                <Heading size='md'>Isbn-13</Heading>
               
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
            <Heading size='md'>89898098008089</Heading>
            
              
            </ButtonGroup>
            </Flex>

            <Flex minWidth='max-content' alignItems='center' gap='10'>
            <Box p='2'>
                <Heading size='md'>Dimension</Heading>
               
            </Box>
            <Spacer />
            <ButtonGroup gap='7'>
            <Heading size='md'>15.24*1.35*22.86</Heading>
            
              
            </ButtonGroup>
            </Flex>
            
          </Box>
        </Box>
      </Box>
    </Box>
  

                    {/* ************************************************************ */}
                </Box>
                <Spacer />
                <Box style={{inlineSize:"800px",marginInline:"auto",fontFamily:"medium-content-serif-font-Georgia, Cambria,serif",
        fontSize:"18px",fontWeight:"400",lineHeight:"36px",color:"#333333"}} p='4' bg='green.400'>
                    <Stack spacing={5}>
                    <text>
                    <label>Intermittent Fasting and Keto: The Ultimate
                         Guide to IF for Women Who Want to Lose Weight, Burn Fat,
                         and Increase Mental Clarity + A Guide to the Ketogenic
                          Diet for Beginners</label>
                    </text>
                    <text>
                        <label>
                        Elizabeth Moore's Intermittent Fasting and Keto: The Ultimate
                         Guide to IF for Women Who Want to Lose Weight, Burn Fat,
                         and Increase Mental Clarity + A Guide to the Ketogenic Diet for Beginners
                        </label>
                        </text>
                    <text>
                    <label style={{}}>
                    If you've always wanted to feel amazing every day, but no fad 
                    diet or exercise has worked, then keep reading...Two manuscripts
                    in one book: Intermittent Fasting for Women: An Essential Guide
                    to Weight Loss, Fat-Burning, and Healing Your Body Without 
                    Sacrificing All Your Favorite Foods Keto Diet: How to Use the
                    Ketogenic Diet to Lose Weight, Burn Fat, and Increase Mental
                    Clarity, Including How to Get into Ketosis and Fasting on Keto
                    for Beginners Are you sick and tired of being unhealthy? Have
                    you tried endless other solutions but nothing seems to work 
                    for more than a few weeks? Do you finally want to say goodbye 
                    to fad diets and discover something which works for you? If so,
                    then you've come to the right place. You see, feeling incredible
                    every day doesn't have to be difficult even if you've tried diets
                    and exercise. In fact, it's easier than you think. A report 
                    published by Harvard demonstrated that intermittent fasting 
                    increases lifespan and improves tolerance to metabolic stressors.
                    While another study produced by neuroscientists at John Hopkins 
                    School of Medicine stated that intermittent fasting could help 
                    to prevent neurodegenerative Diseases similar to Alzheimer's and 
                    Parkinson's. These studies, among others, help validate 
                    intermittent fasting as a safe and effective way that you can 
                    achieve a healthful and balanced life without sacrificing your 
                    lifestyle, time, and money. Some of the topics covered in part 1
                    of this book include: How to prepare and begin a fasting regime 
                    The science of intermittent fasting, specifically for weight loss
                    How to lose weight simply and safely Six different fasting techniques
                    Effective dietary ideas for optimal results Multiple step-by-step guides Three
                    diets suitable for intermittent fasting Common mistakes and myths The influential 
                    History of fasting and much, much more! Some of the topics covered in part 2 of this 
                    book include: How does eating FAT make me LOSE fat? (The science of low-carb/high-fat) What
                    exactly is "ketosis?" and how do I know I'm in it? What do I need to know before I start? What
                    benefits can I expect to see from keto? What can I eat? What CAN'T I eat? What will my
                    first keto weeks be like? Socialising on keto... do I have to be a teetotaller? And many
                    more! Here are just some of the topics that will be covered in the book: The truth about the 
                    "dangers" of low-carb diets 10 common mistakes keto beginners make that you need to know
                    to avoid failing on this diet Fats to love: the best fats to fill your keto diet
                    with What you need to know about macros on the keto diet Keto starter shopping list
                    Delicious keto menu examples Your first keto week Tips for fighting the cravings
                    How to "go keto" in a household of carb eaters And much, much more! And if you have 
                    a burning desire to feel amazing every day without drastically changing the food you
                    eat, then scroll up and click "add to cart"!

                        </label>
                        </text>
                        </Stack>
                </Box>
                 
                </Flex>

                            </div>
                            <Bill/>
                            <Footer/>
        </ChakraProvider>
    )
}
export default Lasthome