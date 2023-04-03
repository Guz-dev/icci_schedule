import { supabase } from "./supabaseClient"

export default async function handler(req, res) {  
  const { data } = await supabase.from('bloques_horario').select("*, ramos( semestre )").order('id_ramos', { ascending: true })

  res.status(200).json({ data })
}
