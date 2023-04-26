const PORT = 3001
const ADDRESS = 'localhost'
const MIDDLEWARE_API = `http://${ADDRESS}:${PORT}`

export async function get_data_table(table){
  const { data } = await fetch(`${MIDDLEWARE_API}/tables/${table}`)
    .then((res) => {return res.json()})
  return {
    data
  }
}

export const insertRamo = async (args) => {
  const response = await fetch(`${MIDDLEWARE_API}/api/insertRamo`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: args
    })
  }).then((res) => { return res.json() })
    .then((data) => { return data })
    .catch((err) => { return err })
}

export const deleteRamo = async (id) => {
  const response = await fetch(`${MIDDLEWARE_API}/api/deleteRamo`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id
    })
  }).then((res) => { return res.json() })
    .then((data) => { return data })
    .catch((err) => { return err })
}

export const updateRamo = async (id, ramo, codigo, semestre) => {
  const response = await fetch(`${MIDDLEWARE_API}/api/updateRamo`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
      ramo: ramo,
      codigo: codigo,
      semestre: semestre
    })
  }).then((res) => { return res.json() })
    .then((data) => { return data })
    .catch((err) => { return err })
}

