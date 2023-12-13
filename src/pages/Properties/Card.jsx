import React from 'react'
import house from "./images/images.png";

const Card = ({array}) => {
  return (
    <div className='flex justify-start flex-wrap gap-10'>
     
      <div  className=' border border-slate-900' style={{width:'380px' , height:'429px' , position:'relative' }}>
<img src={house} alt=""  className='w-full' style={{height:'220px'}}/>
<div className='flex justify-between w-full absolute top-0' >
    <span className='flex items-center justify-center py-1.5 px-3' style={{backgroundColor:' #0061DF', color:'white' , fontSize:'10px' , borderRadius:'2px'}}>FEATURED</span>
    <span className='flex items-center justify-center py-1.5 px-3' style={{backgroundColor:' #0061DF', color:'white' , fontSize:'10px'  , borderRadius:'2px'}}>FOR SALE</span>
</div>
      </div>
    
    </div>
  )
}


export default Card
