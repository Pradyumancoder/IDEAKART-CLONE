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

// https://ideakart-39f3x58eb-pradyumancoder.vercel.app/

// https://ideakartmocker.onrender.com/Data

 
function Homepage() {
    
    const [isLoading, setLoading] = useState(true)
    const[Data,setData]=useState([])
    const [de,setdd]=useState()
   
    const books=[
        
    ]



    const handleData=()=>{
        axios(`https://ideakartmocker.onrender.com/Data`)
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        // .catch(()=>setLoading(true))
    }
        
    useEffect(()=>{
        handleData()

    },[])
    console.log(Data)
    let arr=[]
const movedata=(img,price,text)=>{
    arr.push({img,price,text})
    localStorage.setItem('data',JSON.stringify(arr))
}

// "id": 1,
// "imgUrl": "https://images-eu.ssl-images-amazon.com/images/I/41u5vbuEwtL.jpg",
// "title": "The Efficiency Paradox",
// "price": 374
    
  return  isLoading ? (   //Checkif if is loading
    
     <div  style={{width:'50%' , marginTop:'100px' ,textAlign:"center" ,height:'50' }} ><img src="https://cdn.dribbble.com/users/148670/screenshots/5252136/media/e7019e9ad90430ab0e796f38c8c7baa0.gif" alt="" /> </div> 
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
                   <img style={{display:"flex",padding:"13px"}} src={el.imgUrl} />
                    <div className={styles.global}>
                    <div className={styles.innertext}>
                    <p style={{color:"#65655F"}}>{el.price}</p>
                    {/* <label>{el.photo_href}</label> */}
                    <h2 style={{color:"rgb(23,154,216)",marginRight:"267px"}}>{el.title}</h2>

                    <div className={styles.twoinnerbtn}>
                    <hr style={{ border:" 0.01rem solid #E1E1E1"}}/>
                    <Stack direction='row' spacing={0}>
                    <Link to ="/Lasthome">
                    <Button leftIcon={<BsCartFill />}  variant='' >
                        
                        <div className={styles.icontag} onClick={()=>movedata(el.imgUrl,el.price,el.title)}>View Now</div>
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