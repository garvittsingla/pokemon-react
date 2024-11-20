import React from 'react'
import { GiBodyHeight } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import bgsvg from '../assets/bgsvg.svg'
import { FaCircle } from "react-icons/fa";

const Poke = ({image,name,height,weight,ability1}) => {
    
  return (
    <div className='h-96 w-72 rounded-xl bg-green-800 relative' >
      <img className='absolute left-0  ' src={bgsvg} alt="" />
        <img className='mx-auto h-2/4 ' src={image} alt="" />
        <h2 className='text-white text-center text-2xl flex items-center justify-center gap-2'><FaCircle  />{name}<FaCircle /></h2>
        <div className=' h-1/6 flex items-center justify-around'>
          <div className='h-[50%] w-[40%] bg-orange-500 rounded-lg flex items-center'> 
            <div className='text-4xl px-2'>
              <GiBodyHeight className= 'text-white text-lg '/>
            </div>
            <div >
              <p className='text-white font-semibold text-sm'>Height:{height}</p>
            </div>
          </div>
          <div className='h-[50%] w-[40%] bg-orange-500 rounded-lg flex items-center'> 
            <div className='text-4xl px-2'>
              <GiWeightLiftingUp className= 'text-white text-lg '/>
            </div>
            <div >
              <p className='text-white text-sm font-semibold'>weight:{weight}</p>
            </div>
          </div>
          
          
        </div>
        <div>
          <p className='text-white text-center text-lg font-semibold'>Type:{ability1}</p>
        </div>
        
    </div>
  )
}

export default Poke
