import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Header from './Components/Header'
import ListComponent from './Components/ListComponent'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const localStorageKey = "grok"

  const [grok  , setGrok] = useState(()=>{
  return  JSON.parse(localStorage.getItem(localStorageKey)) || []
  })
 
  // useEffect function here  
   useEffect(()=>{
    localStorage.setItem(localStorageKey , JSON.stringify(grok))
   },[grok])

  const DataPassHandler = (data)=>{
    console.log(grok)
    setGrok([...grok ,{id: uuidv4(), data}])
  }

  const RemoveContent = (id)=>{
   const updatedList =  grok.filter((item)=>{
    return item.id !== id      
    })

    setGrok(updatedList)
  }
 
  return (
    <>
    <Header/> 
    <Form  DataPassHandler={DataPassHandler}/>  
    <ListComponent grok={grok} RemoveContent={RemoveContent} />
    </>
  )
}

export default App
