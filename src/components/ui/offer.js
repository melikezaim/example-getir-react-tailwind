export default function Offer({offer: {id, title, image}}) {
    return (
      <div>
        <div className="relative">
          <img src={image} alt={title} className="bg-mypurple rounded-lg" />
          <img className="absolute top-2 right-14 "src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"/>
          
        </div>
      </div>
    )
  }
  