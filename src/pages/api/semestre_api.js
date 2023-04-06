import { supabase } from "./supabaseClient"

export default async function handler(req, res) {  
  const { data } = await supabase.from('semestres')
              .select(`semestre, 
              bloques_horario( profesor, sala, grupo, ramos( ramo ))
              `)
  /* 
  const { data } = await supabase.from('semestres')
              .select(`semestre, 
              bloques_horario( profesor, sala, grupo, ramos(ramo)) `) *///.order('id_ramos', { ascending: true }
              //.order('id_ramos', { ascending: true }
  /*
  const { data } = await supabase.from('ramos')
              .select("*")//.order('id_ramos', { ascending: true }`)
  /*
    Nombre ramo
    Grupo
    Profesor
    Sala
  */
  res.status(200).json({ data })
}
