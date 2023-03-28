import { supabase } from "./supabaseClient"



export default async function handler(req, res) {  
  const { data } = await supabase.from('ramos').select()

  res.status(200).json({ data })
}
/* 
import { useEffect, useState } from 'react';

export default function Page(){

    const [data,setData] = useState(null)

    useEffect(() => {
      const getData = async () => {
        const { data, error } = await supabase.from('ramos').select()
        console.log({data, error});
        setData(data)  
      }
      getData()
    },[])
    
  
  return <pre>
    {JSON.stringify(data,null,2)}
  </pre>
}
 */

/* function Page({ ramos }) {

  return (
    <ul>
      {ramos.map((ramo) => (
        <li key={ramo.id}>{ramo.nombre}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('ramos').select('*')

  console.log(data);
  return {
    props: {
     ramos: data
    },
  }
}
*/
