import React, { useContext, useState, useEffect } from 'react'
import MyContext from '../api/context'
import { Search } from './search'
export const Favourite = () => {
  const { favourite, data: { allexercise }, toggleload } = useContext(MyContext)
  const [favouriteexercise, setfavouriteexercise] = useState([])

  useEffect(() => {
    const fetch = async () => {
      toggleload()
      const data = await allexercise.filter((item) => {
        return favourite.includes(item.id);
      })
      setfavouriteexercise(data)
      localStorage.setItem('favourite', JSON.stringify(favourite));
    }
    fetch()
    toggleload()
  }, [])

  useEffect(() => {
    const fetch1 = () => {
      localStorage.setItem('favourite', JSON.stringify(favourite))
    }
    fetch1();
  }, [favourite])

  return (
    <div className='rounded container'>
      <div className=''>{favouriteexercise[0] ? <Search exercise={favouriteexercise} n={favouriteexercise.length +1 } /> : <h1 className='text-center text-capitalize bg-light p-5 text-suceess'>add favourite</h1>}</div>
    </div>
  )
}
