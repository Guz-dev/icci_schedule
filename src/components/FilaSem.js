import { useState } from "react"
export default function FilaSem({setSemestre,semestre}){
  const semSym = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <ul id="listaTabla" className="inline-flex w-full px-1 pt-2 "> 
      <div className="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semestre </div>
      {semSym.map((sem,index) => (
        <li key={index} className="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><button className="border-b-4" style={{ borderColor: index === selectedIndex ? '#17286b' : ''}} onClick={() => {setSemestre(index+1); setSelectedIndex(index)}}>{sem}</button></li>
      ))}          
    </ul>
  )
}