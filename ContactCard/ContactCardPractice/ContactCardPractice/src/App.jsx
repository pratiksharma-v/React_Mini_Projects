import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/Components/Header'
import Form from './assets/Components/Form'
import ListComponent from './assets/Components/ListComponent'
import { v4 as uuidv4 } from 'uuid';




function App() {
  const storageKey = 'badaStateArr'
  const [badaState , setbadaState] = useState(()=>{
    return JSON.parse(localStorage.getItem(storageKey)) ||[]})

  


   useEffect(()=>{
      localStorage.setItem(storageKey, JSON.stringify(badaState))
      },[badaState])

   const FormValue = (data)=>{
    // console.log(data , "App wala data")
    
    setbadaState([ ...badaState ,{id:uuidv4() ,data}])
   } 


   const deleteHandler = (id)=>{
    console.log(badaState)
   const updatedList =  badaState.filter((item)=>{
     return  item.id !== id
    })

    setbadaState(updatedList)

   }


  


  return (
    <>
    <Header/>
    <Form FormValue={FormValue}/>
    <ListComponent badaState={badaState} deleteHandler={deleteHandler} />
    </>
  )
}

export default App
