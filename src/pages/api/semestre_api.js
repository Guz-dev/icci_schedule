import { supabase } from "./supabaseClient"

export default async function handler(req, res) {  
  const { data } = await supabase.from('ramos').select().order('ID', { ascending: true })

  res.status(200).json({ data })
}
