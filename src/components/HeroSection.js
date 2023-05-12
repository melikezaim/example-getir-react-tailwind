import React from 'react'
import Slider from "react-slick";
import  { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const phones ={
    TR :'+90',
    US :'+1',
    GB :'+2',
    FR :'+3',
    DE :'+4',
    IT :'+5'
  }


  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };
  return (
    <div className='relative before:bg-gradient-to-r before:from-violet-700 befor:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
   
    <Slider {...settings}>
      <div >
      <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg' />
      </div>

      <div>
      <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg' />
      </div>
    </Slider>
    <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>        
          <div>
              <img src='https://getir.com//_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' />
              <h3 className='text-[36px] mt-5 text-white leading-[40px] font-[600] '>Dakikalar içinde <br/>kapınızda</h3>
          </div>  
              {/* giriş yap kayıt ol */}
          <div className='w-[400px] h-[full] bg-white rounded-lg p-5 '>          
               <h4 className='text-center text-[#5d3ebc] text-[18px] font-bold mb-2'> Giriş Yap Veya Kayıt Ol</h4>
              <div className='flex'>
              <ReactFlagsSelect
                  countries={Object.keys(phones)}
                  customLabels={phones}
                  placeholder="Select phoneS"
                  onSelect={code => setSelected(code)}
                  selected={selected}
                  className='flag-select'
                />
                <label className='phone-input-label flex-1 p-2 relative '>
                <input  className='phone-input peer '/>   
                <span className='absolute top-0 left-0 h-full p-6 text-sm text-gray-700 peer-focus:h-10'>Telefon Numarası</span>     
                </label>
               
              </div>
              <div className='continue-button '>
                <button>Telefon numarası ile devam et</button>
                </div>
          </div>   

    </div>
  </div>
  )
}
