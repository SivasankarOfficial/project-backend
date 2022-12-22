import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
function Update() {
  const navi=useNavigate()
  const [id,setId]=useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => 
  {
  setId(localStorage.getItem('id'));
  setEmail(localStorage.getItem('email'));
  setPassword(localStorage.getItem('password'));
  },[])

  function Updateuser(e) 
{
e.preventDefault()
    axios.put(`https://6364c9637b209ece0f4decde.mockapi.io/crud/${id}`,
  { 
      email :email,
      password:password
  }).then(() =>
  {
    navi('/TableData')
  })
}



  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={Updateuser}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email'></input><br></br>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"></input><br></br>
        <button type='submit'>Update</button>
      </form>

    </div>
  )
}

export default Update