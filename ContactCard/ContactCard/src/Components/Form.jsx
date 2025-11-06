import React from 'react'
import './style.css'
import { useState } from 'react'

function Form({DataPassHandler}) {
 const [contact , setContact] = useState({Name :'' , Email:''})
    const handler = (e)=>{
      setContact({...contact ,[e.target.name]:e.target.value})
      
    }
    
    const btnHandler=()=>{
      if(contact.Name === '' ||  contact.Email === ''){
        alert('First complete the details')
      }else{
        DataPassHandler(contact)
        }

     }


  return (
    <div className="container">
        <label>Name:  <input type='text' placeholder='Enter Name' name ='Name' onChange={handler}></input></label>

        <label>Email:<input type='text' placeholder='Enter Email'name ='Email' onChange={handler}/></label>
         
 <button onClick={btnHandler}>Submit</button>

    </div>
  )
}

export default Form