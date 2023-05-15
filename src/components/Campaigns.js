import { useState ,useEffect } from 'react';
import offerData from 'api/offer'
import Offer from 'components/ui/offer'

export default function Campaigns() {
  const [campaigns , setCampaigns] = useState([]);

  useEffect(() => {
    setCampaigns(offerData)
  },[]) 
  return (
   <div className='container mx-auto px-5'>
     <h1 className='mt-5 text-lg '>Kampanyalar</h1>
     <div className='mt-5 '>
     {setCampaigns && campaigns.map((offer,index)=> <Offer key={index} offer={offer}/>)}
    
     </div>
   </div>
  )
}
