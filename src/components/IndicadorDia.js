export default function IndicadorDia(){
  const tablTh = ['Clave Hora','Lunes','Martes','Miercoles','Jueves','Viernes']
  return(    
    <thead className="bg-[#17286b] border-b border-gray-100 text-white">
      <tr>
          {tablTh.map((tabl,index) => (
            <th key={index} scope="col" className="text-sm font-bold px-6 py-4 text-center border-r border-solid">{tabl}</th>
          ))}
      </tr>
    </thead>
  )
}