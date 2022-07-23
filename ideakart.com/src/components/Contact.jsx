import { Button, ChakraProvider, Input, Stack } from "@chakra-ui/react";
import React from "react";
import styles from "./Contact.module.css"
import Footer from "./Footer";
function Contact(){
    return(
        
        <ChakraProvider >
         
    <div className={styles.signup1}><label >You can contact our team by filling this form -</label></div>

    <div className={styles.box1}>
    <Stack spacing={3}>
        
        <label >Firstname *</label>
  <Input style={{backgroundColor:"skyblue"}} focusBorderColor='black' />
  <label >Lastname *</label>
  <Input style={{backgroundColor:"skyblue"}}
        focusBorderColor='black'/>
        <label >Email</label>
  <Input style={{backgroundColor:"skyblue"}}
        focusBorderColor='black'/>
        <label >Phone</label>
  <Input style={{backgroundColor:"skyblue"}}
  />
 
        <label >Message *</label>
  <Input style={{height:"130px",backgroundColor:"lightcoral"}}
  />
  
</Stack>

<div className={styles.s_btn}>
<Button style={{backgroundColor:"rgb(92,184,92)",color:"#FFFFFF"}}>Send Message</Button>
</div>


</div>


<Footer/>
</ChakraProvider>

    )
}
export default Contact