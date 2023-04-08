import { supabase } from "./supabaseClient"

const DIAS = ["Lunes","Martes","Miercoles","Jueves","Viernes"]

export default async function handler(req, res) {  

  const { data } = await supabase.from('semestres')
              .select(`semestre, 
              bloques_horario( profesor, sala, grupo, dia,
                ramos( ramo ),
                bloques_horas( inicio, termino )
              )
              `)
  
  data.map(dato => {
    dato.bloques_horario.dia = DIAS[dato.bloques_horario.dia-1] 
  })

  res.status(200).json({ data })
}
