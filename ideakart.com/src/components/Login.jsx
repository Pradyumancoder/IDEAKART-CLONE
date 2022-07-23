import { Button, ChakraProvider, Input, Stack } from "@chakra-ui/react";
import React from "react";
import styles from "./Login.module.css"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Login(){
    return(
        <ChakraProvider>
        <div><label className={styles.signup1}>Log in</label></div>
    
        <div className={styles.box1}>
        <Stack spacing={3}>
            <label >Email</label>
      <Input focusBorderColor='#81B7E1' />
      <label >Password</label>
      <Input
            focusBorderColor='#81B7E1'/>
            
    </Stack>
    <div className={styles.checkbtn}>
    <Checkbox defaultChecked>Remember me</Checkbox>
    </div>
    

    <div className={styles.s_btn}>
    <Button style={{backgroundColor:"rgb(92,184,92)",color:"#FFFFFF"}}>Log in</Button>
    </div>
    <Link to="/Signup">
    
    <div>
        <h3 style={{color:"blue" ,paddingTop:"15px"}}>Signup</h3>
    </div>
    
    <div>
        <h3 style={{color:"blue",paddingTop:"5px"}}>Forgot your password?</h3>
    </div>
    </Link>
    
    
    
        </div>
        <Footer/>
    </ChakraProvider>
        
    )
}
export default Login