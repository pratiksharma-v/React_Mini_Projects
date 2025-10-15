import React, { useEffect, useState } from 'react'

function Form({FormValue}) {

const [contact , setContact] = useState({Name:'' , Email:''})

    // input handler Function 
    const handler = (e)=>{
      setContact({...contact ,[e.target.name]:e.target.value})
    }
    
    
    // alert Handler Function 
    const alertHandler=()=>{
      if(contact.Name === '' || contact.Email === ''){
        alert("Bro put values first")
      }
      else{
        FormValue(contact)
        }
      }



    useEffect(()=>{
      // console.log(contact ,"Form Waala")
    },[contact])

  return (
    <>

    <div className="container">

         <label><span>Name: </span><input type='text' placeholder='Enter the name' name='Name' onChange={handler}/></label>

         <label><span>Email: </span><input type='text' placeholder='Enter the email' name='Email' onChange={handler}/></label>

         <button className='btn' onClick={alertHandler}>Submit</button>

    </div>
    
    </>
  )
}

export default Form