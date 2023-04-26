import { insertRamo } from "@/services/middleware_db";
import { useModal } from "context/ModalContext";

export default function RamosForm() {
  const ramoData = ["ramo", "codigo","semestre"]

  const placeholders = ["Ramo","Codigo","Semestre"]
  const { setModal } = useModal()

  const handleSubmit = (event) => {
    event.preventDefault();
    const { ...data } = Object.fromEntries(new FormData(event.target));
    insertRamo(data)
    setModal(false)
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      {placeholders.map((placeholder,index) => (
        <input key={index} name={ramoData[index]} className="my-2 w-72 border p-2 bg-[#17286b] hover:bg-[#27356b] px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="text"
          placeholder={placeholder}/>
      ))}
            
      <div className="flex sm:flex-row justify-center items-center">
        <button className="p-2 w-32 text-base bg-blue-500 rounded-l text-center font-bold text-white hover:text-amber-300">Añadir</button>
        <button onClick={() => setModal(false)} className="w-32 text-base bg-red-500 p-2 rounded-r text-center font-bold text-white hover:text-amber-300 ">Salir</button>
      </div>
    </form>
      
  );  
}