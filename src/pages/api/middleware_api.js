const PORT = 3001
const ADDRESS = 'localhost'
const MIDDLEWARE_API = `http://${ADDRESS}:${PORT}`

export default async function middleware_api(req, res) {  

  const { data } = await fetch(MIDDLEWARE_API)
    .then((res) => { return res.json() })

    
  res.send({data})
}

export async function get_ramos(){
  const { data } = await fetch(`${MIDDLEWARE_API}/tables/ramos`)
    .then((res) => { return res.json() })
            
  return {
    ramos: data
  }
}

export const insertRamo = async (id, ramo, codigo, semestre) => {
  //with post
  console.log(id, ramo, codigo, semestre);

  try{
    const response = await fetch(`${MIDDLEWARE_API}/api/insertRamo`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        ramo: ramo,
        codigo: codigo,
        semestre: semestre
      })
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    console.log(response);
  }
  catch(e){
    console.log(e);
  }

}