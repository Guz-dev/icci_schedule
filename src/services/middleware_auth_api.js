import Jwt from "jsonwebtoken"

const PORT = 3001
const ADDRESS = 'localhost'
const MIDDLEWARE_API = `http://${ADDRESS}:${PORT}`
const secret_key = process.env.NEXT_PUBLIC_AUTH_KEY

export const authUser = async (email, password) => {
  const payload = { "email": email, "password": password }

  console.log(secret_key);
  const token = Jwt.sign(payload, secret_key)
  
  console.log(token);
/* 
  const response = await fetch(`${MIDDLEWARE_API}/api/authUser`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${token}`},
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then((res) => { return res.json() })
    .then((data) => { return data })
    .catch((err) => { return err }) */
}