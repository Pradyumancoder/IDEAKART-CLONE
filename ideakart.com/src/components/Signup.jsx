import {  Button, ChakraProvider, Input, Stack } from "@chakra-ui/react";

import React,{useState} from "react"
import Footer from "./Footer";
import styles from "./Signup.module.css"
function Signup(){
    const [show] = React.useState  (true)
  

    return(
<ChakraProvider>
    <div><label className={styles.signup1}>Sign up</label></div>

    <div className={styles.box1}>
    <Stack spacing={3}>
        <label >Name</label>
  <Input focusBorderColor='#81B7E1' />
  <label >Mobile number</label>
  <Input
        focusBorderColor='#81B7E1'/>
        <label >Email</label>
  <Input
        focusBorderColor='#81B7E1'/>
        <label >Password <span className={styles.char}>(6 characters minimum)</span></label>
  <Input
  />
 
        <label >Password confirmation</label>
  <Input
  />
  
</Stack>
<div className={styles.s_btn}>
<Button style={{backgroundColor:"rgb(92,184,92)",color:"#FFFFFF"}}>Sign up</Button>
</div>
<div>
    <h3 style={{color:"blue"}}>Log in</h3>
</div>




    </div>
    <Footer/>
</ChakraProvider>
    )
}
export default Signup
