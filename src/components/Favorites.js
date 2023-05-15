import React, { useState, useEffect } from 'react';
import FavoriteData from 'api/favorite';
import Favorite from 'components/ui/favorite'

export default function Favorites() {
  const [Favorites , setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(FavoriteData)
  },[]) 
  return (
   <div className='container mx-auto px-5'>
     <h1 className='mt-5 text-lg hidden'>Favoriler</h1>
     <div className='mt-5 flex m-5 justify-center items-center'>
     {setFavorites && Favorites.map((favorite,index)=> 
     <Favorite key={index} favorite={favorite}/>)}    
     </div>
   </div>
  )
}