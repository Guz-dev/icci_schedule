import Bloque_horario from "./bloque_horario"
export default function ColumnaBloques({dias,bloques,semestre,hora}){
  return(
    dias.map((dia, index) => (
      <td key={index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
        {bloques.map((bloque, index) => {
          if (bloque.semestre === semestre) {
            return (
              <div key={index}>
                <Bloque_horario params={{semestre,hora,dia}} bloque={bloque} />
              </div>
            )
          }
        })}
      </td>
    ))
  )
}

