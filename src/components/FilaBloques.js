import ColumnaBloques from "./ColumnaBloques"
import ClaveHora from "./ClaveHora"
export default function FilaBloques({bloques,semestre}){
  const horas = [['08:00','09:30'],['09:40','11:10'],['11:20','12:50'],['14:45','16:10'],['16:20','17:50'],['17:55','19:25'],['19:30','21:00']]
  const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
  return (
    horas.map((hora,index) => (
      <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-gray-200">
        <ClaveHora hora={hora}/>
        <ColumnaBloques dias={dias} bloques={bloques} semestre={semestre} hora={hora}/>
      </tr>
    ))
  )
}