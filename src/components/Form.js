import React from 'react'
import {useNavigate} from 'react-router-dom'
import  axios from 'axios'
import { useState } from 'react'
import './Form.css'


export default function Router() {
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState("")
 
    const navi=useNavigate()
    const url="https://6364c9637b209ece0f4decde.mockapi.io/crud"

  
    function GoTable(e){
      e.preventDefault()
      axios.post(url,{
        email:email,
        password:password
      })
      .then(()=>
    navi('/TableData')

    )
  }
      return (
    <div>
       <form onSubmit={GoTable}>
      <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email'></input><br></br>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password"></input><br></br>
      <button type='submit'>Submit</button>
      </form>
        
    </div>
  )
}
