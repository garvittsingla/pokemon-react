import React from 'react'
import { GiBodyHeight } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import bgsvg from '../assets/bgsvg.svg'
import { FaCircle } from "react-icons/fa";

const Poke = ({image,name,height,weight,ability1}) => {
  const typeColors = {
    normal: 'bg-gray-700',
    fire: 'bg-red-800',
    water: 'bg-blue-800',
    electric: 'bg-yellow-700',
    grass: 'bg-green-800',
    ice: 'bg-cyan-200',
    fighting: 'bg-red-900',
    poison: 'bg-purple-800',
    ground: 'bg-yellow-900',
    flying: 'bg-indigo-200',
    psychic: 'bg-pink-900',
    bug: 'bg-lime-700',
    rock: 'bg-orange-800',
    ghost: 'bg-purple-900',
    dragon: 'bg-indigo-300',
    dark: 'bg-gray-700',
    steel: 'bg-gray-400',
    fairy: 'bg-pink-700',
  }
  
  return (
    <div className={`h-96 w-72 rounded-xl relative ${typeColors[ability1] || 'bg-gray-200'}`}>
      <img className='absolute left-0' src={bgsvg} alt="" />
      <img className='mx-auto h-2/4' src={image} alt="" />
      <h2 className='text-white text-center text-2xl flex items-center justify-center gap-2'>
        <FaCircle />{name}<FaCircle />
      </h2>
      <div className='h-1/6 flex items-center justify-around'>
        <div className='h-[50%] w-[40%] bg-orange-500 rounded-lg flex items-center'>
          <div className='text-4xl px-2'>
            <GiBodyHeight className='text-white text-lg' />
          </div>
          <div>
            <p className='text-white font-semibold text-sm'>Height: {height}</p>
          </div>
        </div>
        <div className='h-[50%] w-[50%] bg-orange-500 rounded-lg flex items-center'>
          <div className='text-4xl px-2'>
            <GiWeightLiftingUp className='text-white text-lg' />
          </div>
          <div>
            <p className='text-white text-sm font-semibold'>Weight: {weight}</p>
          </div>
        </div>
      </div>
      <div>
        <p className='text-white text-center text-lg font-semibold'>Type: {ability1}</p>
      </div>
    </div>
  )
}

export default Poke
