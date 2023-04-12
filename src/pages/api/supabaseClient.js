import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export async function insertBloque(req) {
    try {
        console.log("entro");
        console.log(req);
        const { data, error } = await supabase.from("bloques_horario")
            .insert({ id_ramos: 1,
                    id_bloques_horas: 1,
                    grupo: 'A',
                    id_bloques_horario: 300,
                    dia: 5,
                    profesor: "Felipe",
                    sala: "C-303"
        }).single()
        /* const { error } = await supabase.from("ramos")
            .insert({ id:51,
                ramo:"Otro ramo",
                codigo:"Codigo",
                semestre: 5
        }).single() */

        if (error) throw error
        window.location.reload()
    } catch(error){
        alert(error.message)
    }
}

export async function deleteBloque(req) {
    try {
        console.log("entro");
        console.log(req);
        const { data, error } = await supabase.from("bloques_horario")
            .delete().eq('id_bloques_horario',300)
        /* const { error } = await supabase.from("ramos")
            .insert({ id:51,
                ramo:"Otro ramo",
                codigo:"Codigo",
                semestre: 5
        }).single() */

        if (error) throw error
        window.location.reload()
    } catch(error){
        alert(error.message)
    }
}
