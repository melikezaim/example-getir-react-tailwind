
export default function category({category:{id,title,image}}) {
  return (
    <div>
        <a href="#" className="flex flex-col group items-center p-2">
            <img src={image} alt={title} className="w-14 h-14 "/>
            <span className="text-[16px] m-2 font-semibold text-gray-800 hover:text-mypurple " >{title}</span>
        </a>
    </div>
  )
}
