import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import { FaSquareGithub } from "react-icons/fa6";
import Poke from './components/Poke.jsx'


const App = () => {
  const [cards,setcards]= useState([])
  const [search,setsearch]= useState('')
  const [filter1,setfilter1]= useState([])


  async function getData(){
    const response =await axios.get("https://pokeapi.co/api/v2/pokemon?limit=300")
    // console.log(response.data)
    const response2 = await Promise.all(response.data.results.map((itm)=>{
      return axios.get(itm.url)
    }))
    const response3 = response2.map((item)=>{
      return item.data
    })
    console.log(response3)
    setcards(response3)
    }
  useEffect(()=>{
    getData()
  },[])
  function filterData(){
    const filtered = cards.filter((item)=>{
      return item.name.includes(search)
    })
    setfilter1(filtered)
  }
 useEffect(()=>{
    filterData()
 },[search,cards])
  return (
    <div className='bodytag h-screen w-screen bg-[#000000]  font-mono'>
      
      <div className='h-fit  flex justify-between p-10 items-center' >
        <div>
          <h1 className='text-white text-4xl text-center overflow-y-hidden'>PokeDex</h1>
        </div>
        <div className='text-4xl'>
          <a href="https://github.com/garvittsingla/pokemon-react"> <FaSquareGithub   className='text-white ' /></a>
        </div>
      </div>
      <div className=' h-16 flex justify-center items-center '>
        <input type="text" placeholder='Search a Pokemon...' className='rounded border-none w-2/4 p-2 focus:border-orange-400 border-2' onChange={(e)=>{setsearch(e.target.value )}}/>
      </div>
      <div className='flex justify-center items-center w-full mt-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12  h-[90%] w-[90%] '>
          {filter1.map((item)=>{
            return(
              <Poke key={item.id} name={item.name} image={item.sprites.front_default} height={item.height} weight={item.weight} ability1={item.types[0].type.name}/>
            )
          })}
        </div>
      </div>
    </div>
    
  )
}

export default App