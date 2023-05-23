import React, { useState, useEffect } from 'react';
import MenüData from 'api/menü';
import Menü from 'components/ui/menü';


export default function Footer() {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    setFooter(MenüData);
  }, []);

  return (
    <div className='bg-white mt-32'>
      <div className='container mx-auto grid grid-cols-4'>
        <section>
              <nav className='mt-5 grid gap-y-2'>
              <h2 className='text-lg text-mypurple -mt-5'>Getir'i indirin!</h2>
                <a href="https://apps.apple.com/app/id995280265">
                  <figure className="w-[160px] h-[full] m-2">
                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                  </figure>
                </a>
                {/* ----- */}
                <a href="https://play.google.com/store/apps/details?id=com.getir&pli=1">
                  <figure className="w-[160px] h-[full] m-2">
                    <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                  </figure>
                </a>
                {/* ----- */}
                <a href="https://appgallery.huawei.com/#/app/C100954039">
                  <figure className="w-[160px] h-[full] m-2">
                    <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                  </figure>
                </a>
              </nav>
        </section>             
              {footer && footer.map((menü, index) => <Menü key={index} menü={menü} />)}
      </div>
    </div>
  );
}

