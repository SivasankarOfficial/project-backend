    
import React, { useEffect } from 'react'
import './TableData.css'
import  axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useState}  from 'react'
export default function TableData () {
    const navi=useNavigate()
    const[getdata,setGetdata]=useState([])
    const url="https://6364c9637b209ece0f4decde.mockapi.io/crud"

    function GetData(){
   axios.get(url)
      .then((response)=>{
      // console.log(response)
      setGetdata(response.data)
    //   console.log(getdata);
      }
      )
    }
    
    useEffect(() => {
        GetData()
      }, [])
    
    function DeleteRow(id){
        axios.delete(`https://6364c9637b209ece0f4decde.mockapi.io/crud/${id}`)
        .then(()=>{
            GetData()
        })

    }
   
    function Goback(){
        navi('/')
    }
    const Update=(id,email,password)=>{
     
      localStorage.setItem('id',id)
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)

      navi('/Update')


    }
   
    
  return (
    <div>
       
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
        </tr>
        </thead>
        {getdata.map((gd)=>(
        <tbody>
        <tr>
            <td>{gd.id}</td>
            <td>{gd.email}</td>
            <td>{gd.password}</td>
            <td><button onClick={()=>DeleteRow(gd.id)}>Delete</button>
           <button onClick={() => Update(gd.id,gd.email,gd.password)}>Update</button></td>
        </tr>
        </tbody>
         ))}
    </table>
    <button onClick={Goback}>GoBack</button>
    </div>
  )
}
