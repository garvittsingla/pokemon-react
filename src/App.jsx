import { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import { FaSquareGithub } from "react-icons/fa6";
import Poke from './components/Poke.jsx'
import pokeball from './pokeball.png'


const App = () => {
  const [cards,setcards]= useState([])
  const [search,setsearch]= useState('')
  const [filter1,setfilter1]= useState([])
  const [favourites,setfavourites]= useState([])
  const [isLoading, setIsLoading] = useState(false);
  


  async function getData(){
    const response =await axios.get("https://pokeapi.co/api/v2/pokemon?limit=200")
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
    setIsLoading(true);
    getData().then(()=>{
      setIsLoading(false);
    })
    
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
 function addtofav(n){
  console.log(n)
  setfavourites([...favourites,n])
 }
 function removefromfav(n){
  console.log(n)
  const newarr = favourites.filter((item)=>{
    return item!=n;
  })
  setfavourites(newarr)
 }
  return (
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      
      <div className='  flex justify-between p-10 items-center' >
        <div className='flex'>
          <img className='h-10 w-10 mr-2' src={pokeball} alt="" />
          <h1 className='text-white text-4xl text-center overflow-y-hidden'>PokeDex</h1>
        </div>
        <div className='text-4xl flex items-center gap-3  overflow-y-hidden'>
          <div className='flex items-center gap-2 text-2xl rounded-lg bg-red-500 px-2 py-1 text-white font-semibold  '> 
            <h2 className='overflow-y-hidden '>Favourites <span className='bg-green-400 p-2 rounded-lg'>{favourites.length}</span></h2>
             </div>
          <a href="https://github.com/garvittsingla/pokemon-react"> <FaSquareGithub   className='text-white ' /></a>
        </div>
      </div>
      <div className=' h-16 flex justify-center items-center '>
        <input type="text" placeholder='Search a Pokemon...' className='rounded border-none w-2/4 p-2 focus:border-orange-400 border-2' onChange={(e)=>{setsearch(e.target.value.toLowerCase() )}}/>
      </div>
      {isLoading ? <p className='text-white text-center '>Loading...</p> : null}
      <div className='flex  justify-center items-center w-full mt-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 h-[90%]  '>
          {filter1.map((item)=>{
            return(
              <Poke removefromfav={removefromfav} favourites={favourites} addtofav={addtofav} key={item.id} id={item.id} name={item.name} image={item.sprites.front_default} height={item.height} weight={item.weight} ability1={item.types[0].type.name}/>
            )
          })}
        </div>
      </div>
    </div>
    
  )
}

export default App