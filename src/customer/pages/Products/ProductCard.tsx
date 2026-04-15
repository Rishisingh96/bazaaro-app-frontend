import React, { use, useEffect, useState } from 'react'
import "./ProductCard.css";
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
// declare module "*.css";

const images = [
  "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/f/9/y/free-kumkum43a-hs-divastri-unstitched-original-imahaktyguphysbd.jpeg?q=70",

  "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/m/t/free-kumkum43a-hs-divastri-unstitched-original-imahaktygyrafg5n.jpeg?q=70",

  "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/4/h/s/free-pumpum18-sr-sareemall-unstitched-original-imahjk63mkgsa9gs.jpeg?q=70"

];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHoverd] = useState(false);
  
useEffect(() => {
  let interval:any;

  if (isHovered) {
    interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);
  }

  return () => clearInterval(interval);
}, [isHovered]);

  return (
   <>
   <div className='group px-4 relative'>
    <div className='card'
      onMouseEnter={()=>setIsHoverd(true)}
      onMouseLeave={()=>setIsHoverd(false)}
    >
      
     {
      images.map((item,index)=>(
      <img 
      key={index}
      className='card-media object-top' 
      src ={item} 
      alt="" 
      style={{transform:`translateX(${(index - currentImage) * 100}%)`}}
      />))
     }
    { isHovered &&
      <div className='indicator flex flex-col items-center space-y-2'>
        <div className='flex gap-3'>
          <Button variant='contained' color='secondary'>
            <Favorite sx={{color:teal[500]}}/>
          </Button>

          <Button variant='contained' color='secondary'>
            <ModeComment sx={{color:teal[500]}}/>
          </Button>
          
        </div>
      </div>
    }
    </div>
    <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
      <div className='name'>
        <h1>banarshi sari</h1>
        <p>Green sari</p>
      </div>
      <div className='price flex item-center gap-3'>
        <span className='font-sans text-gray-800'> 
           ₹ 400
        </span>
        <span className='thin-line-through text-gray-400 '>
           ₹ 900
        </span>
        <span className='text-primary-color font-semibold'>
          60%
        </span>
      </div>
    </div>
   </div>
   </>
  )
}

export default ProductCard
