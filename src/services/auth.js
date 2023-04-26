import Jwt from "jsonwebtoken"
import { useEffect } from "react"

const PORT = 3002
const ADDRESS = 'localhost'
const AUTH_SERVER = `http://${ADDRESS}:${PORT}`
const secret_key = process.env.NEXT_PUBLIC_AUTH_KEY

export const authUser = async (email, password) => {
  const payload = { "email": email, "password": password }

  const auth_token = Jwt.sign(payload, secret_key)
  //console.log(auth_token);

  const { token }= await fetch(`${AUTH_SERVER}/auth`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${auth_token}`},
    body: JSON.stringify({
      token: auth_token
    })
  }).then((res) => { return res.json() })
    .then((data) => { return data })
    .catch((err) => { return err })

  console.log(token);

  if (token){
    localStorage.setItem("token", token)
    return { auth: true, token: token }
  } else {
    return { auth: false, token: null }
  }

}

export const isAuthenticated = async(session_token) => {  
  const token = session_token
  if (!token) {
    return false
  }
  const { authenticated } = await fetch(`${AUTH_SERVER}/isAuthenticated`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${token}`},
    body: JSON.stringify({
      token: token
    })
  }).then((res) => { return res.json() })
    .catch((err) => { return err })

  console.log("Esta autenticado "+authenticated);
  return authenticated  
  
}