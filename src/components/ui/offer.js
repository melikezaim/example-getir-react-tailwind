export default function Offer({offer: {id, title, image}}) {
    return (
      <div className="container mx-auto">
        <section className="container mx-auto relative">
    <img src={image} alt={title} className="bg-mypurple rounded-lg" />
    <img className="container mx-auto absolute w-[605px] h-[288px] lg:top-5 lg:right-14" src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="Telefon" />       
    <div className="h-full w-[400px] p-10 ml-6 absolute top-6">
      <h1 className="text-[26px] text-white font-bold">Getir'i indirin!</h1>
      <span className="text-lg text-white font-medium">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</span>
         <nav className="">
            <ol className="flex mt-5 -ml-4">
                <li >
                  <a href="https://apps.apple.com/app/id995280265">
                  <figure className="relative w-[160px] h-[full] m-2">
                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
                  </figure>
                  </a>
                </li>
                {/* ----- */}
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.getir&pli=1">
                  <figure className="w-[160px] h-[full] m-2">
                    <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
                  </figure>
                  </a>
                </li>
                {/* ----- */}
                <li>
                  <a href="https://appgallery.huawei.com/#/app/C100954039">
                  <figure className="w-[160px] h-[full] m-2">
                    <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
                  </figure>
                  </a>
                </li>
            </ol>
         </nav> 
          </div>
        </section>
      </div>
    )
  }
  