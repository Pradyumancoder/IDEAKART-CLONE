import * as React from 'react'
import styles from "./Homepage.module.css"
import axios from "axios"

import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'

function Homepage() {
//   api="https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=yourAPIKey"
    const[Data,setData]=useState([])

    const handleData=()=>{
        axios(`https://www.googleapis.com/books/v1/volumes?q=search`)
        .then((res)=>setData(res.data.items))
    }

    useEffect(()=>{
        handleData()
    },[])
    console.log(Data)
 
  return (
    <ChakraProvider>
        <div>
      <div className={styles.container}>
        <div>
        <h1 style={{position:"absolute",left:"174px"}}>IDEAKART</h1> 
        </div>
        <div className={styles.fourtext}>
        <div>
            <label htmlFor="">About</label>
        </div>
        <div>
            <label htmlFor="">Contact</label>
        </div>
        <div>
            <label htmlFor="">Sign IN</label>
        </div>
        <div>
            <label htmlFor="">Sign UP</label>
        </div>
        </div>
        </div>
        <div className={styles.classname}>
            <input type="search" placeholder='  search' style={{height:"34px",width:"376px"}} />
            
        </div>
        <div>
                <button style={{background:"red",position:"relative",left:"706px",width: "70px",
    height:" 35px",top: "-34px"}}>search</button>
            </div>
    
      </div>
    </ChakraProvider>
  )
}
export default Homepage