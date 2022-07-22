import * as React from 'react'
import styles from "./Homepage.module.css"
import axios from "axios"
import { BsCartFill } from "react-icons/bs"
import { MdOutlineMenuBook } from "react-icons/md"
import { TbMinusVertical } from "react-icons/tb"

import { Button, Stack } from '@chakra-ui/react'

import {  ChakraProvider} from '@chakra-ui/react'
import { useState} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

 
function Homepage() {
    const[Data,setData]=useState([])

    const handleData=()=>{
        axios(`https://json-server-mocker-react.herokuapp.com/Data`)
        .then((res)=>setData(res.data))
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
            <label htmlFor=""><Link to="/signup">Sign UP</Link></label>
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
        
        <div className={styles.bigbox}>
        <div style={{position:"relative",left:"86px",top:"70px"}}>
            <label className={styles.topreads}>TOP READS</label>
        </div>
        <div className={styles.maprender}>
                    
                {
                Data.map((el)=>(
                   <div className={styles.box}>
                   <img style={{display:"flex",padding:"13px"}} src={el.lazy_src} />




                    <div className={styles.global}>
                    <div className={styles.innertext}>
                    <p style={{color:"#65655F"}}>{el.price}</p>
                    {/* <label>{el.photo_href}</label> */}
                    <h2 style={{color:"rgb(23,154,216)",marginRight:"267px"}}>{el.color_text}</h2>

                    <div className={styles.twoinnerbtn}>
                    <hr style={{ border:" 0.01rem solid #E1E1E1"}}/>
                    <Stack direction='row' spacing={0}>
                    <Button leftIcon={<BsCartFill />}  variant='' >
                        
                        <div className={styles.icontag}>View Now</div>
                    </Button>

                    <div className={styles.tbicon}>{<TbMinusVertical/>}</div>
                     
                    <Button leftIcon={<MdOutlineMenuBook />}  variant=''>
                        
                        <div className={styles.icontag}>More details</div>
                    </Button>
                    </Stack>

                    
                    </div>
                    </div>
                    </div>
                    
                    

                    </div>
            ))
        }
    </div>
    </div>


      </div>
    </ChakraProvider>
  )
}
export default Homepage