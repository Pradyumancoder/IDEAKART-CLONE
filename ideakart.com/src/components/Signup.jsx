import {  Button, ChakraProvider, Input, Stack } from "@chakra-ui/react";

import React,{useState} from "react"
import { Link } from "react-router-dom";
import Footer from "./Footer";
import styles from "./Signup.module.css"
function Signup(){
    const [show] = React.useState  (true)
  const handclick=()=>{
alert("Registration done")
  }

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
<Link to ="/Login">
<div className={styles.s_btn}>
<Button onClick={handclick} style={{backgroundColor:"rgb(92,184,92)",color:"#FFFFFF"}}>Sign up

</Button>
</div>


<div>
    <h3 style={{color:"blue",cursor:"pointer"}}>Log in</h3>
</div>
</Link>



    </div>
    <Footer/>
</ChakraProvider>
    )
}
export default Signup
