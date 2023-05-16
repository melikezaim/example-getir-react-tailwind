import React from 'react'

export default function menü({menü:{title,item}}) {
  const itemsInOrder = ['Hakkımızda', 'Kariyer', 'Teknoloji Kariyerleri', 'İletişim', 'Sosyal Sorumluluk Projeleri'];

const itemsToRender = itemsInOrder.map((item) => <li key={item}>{item}</li>);

return (
  <div className='grid'>
    <h2 className='text-lg text-mypurple'>{title}</h2>
    <ul>
     <a className='grid gap-y-3 text-gray-900' href='#'>
     {itemsToRender}
     </a>
    </ul>
  </div>
);
}
