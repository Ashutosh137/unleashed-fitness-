import React, { useContext,useState, useEffect } from 'react'
import MyContext from '../api/context'
import { Search } from './search'
export const Favourite = () => {
    const {favourite,setfavourite,allexercise}= useContext(MyContext)
    const [favouriteexercise, setfavouriteexercise] = useState([])

    useEffect(()=>{
        const fetch=async ()=>{
            const data=await allexercise.filter((item)=>{
                return item.id.includes(favourite);
            })
            setfavouriteexercise(data)
        }
        fetch()
    })
  return (
    <div className='rounded'>{favouriteexercise[0] ? <Search exercise={favouriteexercise} n={favouriteexercise.length} /> : <h1 className='text-center text-capitalize bg-light p-5 text-suceess'>add favourite</h1>}
    </div>
  )
}
