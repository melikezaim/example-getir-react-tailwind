import React from 'react'
export default function favorite({favorite:{span,header,image}}) {
  return (
    <div>
       <section >
       <div className='container mx-auto px-5 bg-white mt-16'>
            <div className='card px-20 text-center '>
                <figure className='flex justify-center'> 
                  <img className='w-[220px] h-[220px]' src={image}/>                
                </figure>
                  <h1 className='mt-2 text-xl font-medium text-mypurple'>{header}</h1>
                  <p className='mt-2 text-[#697488] text-bold'>{span}</p>
             </div>
       </div>
       </section>        
    </div>
  )
}
