import { supabase } from "./supabaseClient"

const PORT = 3001
const ADDRESS = 'localhost'
const MIDDLEWARE_API = `http://${ADDRESS}:${PORT}`

export default async function middleware_api(req, res) {  

    const { data } = await fetch(MIDDLEWARE_API)
            .then((res) => { return res.json() })

    
    res.send({data})
}

export async function get_ramos(){
    const { data } = await fetch(`${MIDDLEWARE_API}/ramos`)
            .then((res) => { return res.json() })
            
    return {
        ramos: data
    }
}