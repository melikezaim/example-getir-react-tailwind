import { useState ,useEffect } from 'react';
import categoryData from 'api/categoris.json'
import Category from 'components/ui/category'

export default function Categories() {
  const [categories , setCategories] = useState([]);

  useEffect(() => {
      setCategories(categoryData)
  },[]) 
  return (
    <div className='bg-white py-4 shadow-md'>
      <div className='container mx-auto px-5'>
        <h3 className='text-[20px]'>Kategoriler</h3>
        <div className='grid grid-cols-10'>
           {categories && categories.map((category,index)=> <Category key={index} category={category}/>)}
        </div>
      </div>
    </div>
  )
}
