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
import Footer from './Footer'

 
function Homepage() {
    
    const [isLoading, setLoading] = useState(true)
    const[Data,setData]=useState([])
    const [de,setdd]=useState()
   
    const books=[
        
    ]



    const handleData=()=>{
        axios(`https://json-server-mocker-react.herokuapp.com/Data`)
        .then((res)=>setData(res.data))
        setLoading(false)
    }
        
    useEffect(()=>{
        handleData()

    },[])
    console.log(Data)

 
    
  return  isLoading ? (   //Checkif if is loading
    
     <div  style={{ border:"3px solid red" , width:'50%' , marginTop:'100px ' , height:'50' }} ><img src="https://www.fugusau.edu.ng/wp-content/uploads/2021/01/Bubble-Preloader-1-1.gif" /></div> 
    ) :(
    <ChakraProvider>
    
        <div>

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
                    <Link to ="/Lasthome">
                    <Button leftIcon={<BsCartFill />}  variant='' >
                        
                        <div className={styles.icontag}>View Now</div>
                    </Button>
                     </Link>
                    <div className={styles.tbicon}>{<TbMinusVertical/>}</div>
                    <Link to ="/Lasthome">
                    <Button leftIcon={<MdOutlineMenuBook />}  variant=''>
                        
                        <div className={styles.icontag}>More details</div>
                    </Button>
                    </Link>
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
      <Footer/>
    </ChakraProvider>
    )
    }
    
export default Homepage