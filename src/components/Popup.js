export default function Popup(props) {
  const color = props.tipo === 'Eliminar' ? 'bg-red-400' : 'bg-blue-400'
  return (
    <>
      { props.tipo !== undefined &&  
        <div className="flex justify-center items-center h-10 mt-2">
          <container className={color + " p-2 rounded-lg "}> 
            <message className="text-4xl"> Se realizo un cambio de tipo { props.tipo }  </message>
          </container>
        </div>
      }
    </>
  )  
}