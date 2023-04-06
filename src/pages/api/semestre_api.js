import { supabase } from "./supabaseClient"

export default async function handler(req, res) {  
//  const { data } = await supabase.from('ramos').select().order('ID', { ascending: true })
  const { data } = await supabase.from('semestres').select("semestre, bloques_horario(profesor)")

  res.status(200).json({ data })
}
