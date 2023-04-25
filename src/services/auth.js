import Jwt from "jsonwebtoken"
import { useEffect } from "react"

const PORT = 3002
const ADDRESS = 'localhost'
const AUTH_SERVER = `http://${ADDRESS}:${PORT}`
const secret_key = process.env.NEXT_PUBLIC_AUTH_KEY

export const authUser = async (email, password) => {
  const payload = { "email": email, "password": password }

  const auth_token = Jwt.sign(payload, secret_key)
  console.log(auth_token);

  const { session_token } = await fetch(`${AUTH_SERVER}/auth`, {
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
  
  if (session_token){
    localStorage.setItem("token", session_token)
    return true
  } else {
    return false
  }

}

export const isAuthenticated = () => {  
  const token = localStorage.getItem("token")

  const { Authenticated } = fetch(`${AUTH_SERVER}/isAuthenticated`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${token}`},
    body: JSON.stringify({
      token: token
    })
  }).then((res) => { return res.json() })
    .catch((err) => { return err })

  console.log(Authenticated);
  return Authenticated  
  
}